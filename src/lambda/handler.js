'use strict';
const AWS = require('aws-sdk');
const CostExplorer = require('../aws/cost-explorer');
const moment = require('moment');

const ceClient = new AWS.CostExplorer({
  apiVersion: '2017-12-25'
});

module.exports.costReporter = async (event, context, callback) => {
  try {
    const startDate = moment().startOf('month').format('YYYY-MM-DD');
    const endDate = moment().format('YYYY-MM-DD');
    const costExplorer = new CostExplorer(ceClient);
    const ret = await costExplorer.getCostAndUsage(startDate, endDate);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(ret)
    });
  } catch (err) {
    callback(err);
  }
};
