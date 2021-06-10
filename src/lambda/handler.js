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
    let totalCost = '';
    if (result.Total.BlendedCost) {
      totalCost = `${result.Total.BlendedCost.Amount} ${result.Total.BlendedCost.Unit}`;
    }
    let usageQuantity = '';
    if (result.Total.UsageQuantity) {
      usageQuantity = result.Total.UsageQuantity;
    }
    msg = `From ${startDate} to ${endDate}\nCurrent Cost in this month: ${totalCost}\nUsage Quantity: ${usageQuantity}`;
  }
  return msg;
}

module.exports.costReporter = async (event, context, callback) => {
  try {
    const startDate = moment().startOf('month').format('YYYY-MM-DD');
    const endDate = moment().format('YYYY-MM-DD');

    const costExplorer = new CostExplorer(ceClient);
    const ceRet = await costExplorer.getCostAndUsage(startDate, endDate);
    console.log(JSON.stringify(ceRet));

    const msg = createMessage(ceRet);

    const sns = new SNS(snsClient);
    const snsRet = await sns.publish(msg);

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(snsRet)
    });
  } catch (err) {
    callback(err);
  }
};
