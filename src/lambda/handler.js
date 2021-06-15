'use strict';
const AWS = require('aws-sdk');
const CostExplorer = require('../aws/cost-explorer');
const SNS = require('../aws/sns');
const moment = require('moment');

const ceClient = new AWS.CostExplorer({
  apiVersion: '2017-12-25'
});
const snsClient = new AWS.SNS({
  apiVersion: '2010-03-31'
});

function createMessage (report) {
  let msg = 'Failed to create message.';
  if (report.ResultsByTime) {
    const result = report.ResultsByTime[0];
    const startDate = result.TimePeriod.Start;
    const endDate = result.TimePeriod.End;

    const msgs = [];
    msgs.push(`From ${startDate} to ${endDate}`);

    // In case of Total result included
    if (result.Total) {
      if (result.Total.UnblendedCost) {
        msgs.push(`Current Total Cost in this month: ${result.Total.UnblendedCost.Amount} ${result.Total.UnblendedCost.Unit}`);
      }
      if (result.Total.UsageQuantity) {
        msgs.push(`Usage Quantity: ${result.Total.UsageQuantity.Amount}`);
      }
      msg = msgs.join('\n[n');
    }

    // In case of Groups result included
    if (result.Groups) {
      let totalCost = 0;
      const services = [];
      const costs = [];
      const usages = [];
      result.Groups.forEach(group => {
        if (group.Metrics.UnblendedCost) {
          const cost = Number(group.Metrics.UnblendedCost.Amount);
          if (cost > 0) {
            services.push(group.Keys.join(', '));
            costs.push(cost);
            totalCost += cost;
            if (group.Metrics.UsageQuantity) {
              usages.push(Number(group.Metrics.UsageQuantity.Amount));
            }
          }
        }
      });
      msgs.push(`Current Total Cost in this month: ${totalCost} USD`);
      msgs.push('----------');
      services.forEach((service, idx) => {
        msgs.push(`${service}: ${costs[idx]} USD\nUsageQuantity: ${usages[idx]}`);
      });
      msg = msgs.join('\n\n');
    }
  }
  return msg;
}

module.exports.costReporter = async (event, context, callback) => {
  try {
    const startDate = moment().startOf('month').format('YYYY-MM-DD');
    const endDate = moment().format('YYYY-MM-DD');

    const costExplorer = new CostExplorer(ceClient);
    const costUsage = await costExplorer.getCostAndUsage(startDate, endDate);
    console.log(JSON.stringify(costUsage));

    const msg = createMessage(costUsage);

    const sns = new SNS(snsClient);
    const ret = await sns.publish(msg);

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(ret)
    });
  } catch (err) {
    callback(err);
  }
};
