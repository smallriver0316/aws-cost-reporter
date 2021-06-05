'use strict';
var AWS = require('aws-sdk');
var CostExplorer = require('../aws/cost-explorer');

var ceClient = new AWS.CostExplorer({
  apiVersion: '2017-12-25',
});

module.exports.costReporter = async (event, context, callback) => {
  try {
    const costExplorer = new CostExplorer(ceClient);
    const ret = await costExplorer.getCostCategories();
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(ret),
    });
  } catch(err) {
    callback(err);
  }
};
