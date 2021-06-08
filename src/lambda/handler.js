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

module.exports.costReporter = async (event, context, callback) => {
  try {
    const startDate = moment().startOf('month').format('YYYY-MM-DD');
    const endDate = moment().format('YYYY-MM-DD');

    const costExplorer = new CostExplorer(ceClient);
    const ceRet = await costExplorer.getCostAndUsage(startDate, endDate);

    const sns = new SNS(snsClient);
    const snsRet = await sns.publish(JSON.stringify(ceRet));

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(snsRet)
    });
  } catch (err) {
    callback(err);
  }
};
