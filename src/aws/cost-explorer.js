'use strict';
module.exports = class CostExplorer {
  constructor (client) {
    this.client = client;
  }

  getCostCategories = async (startDate, endDate) => {
    console.log(`[CostExplorer][getCostCategories] Start getCostCategories between ${startDate} and ${endDate}`);
    const params = {
      TimePeriod: {
        Start: startDate,
        End: endDate
      }
    };
    return new Promise((resolve, reject) => {
      return this.client.getCostCategories(params, (err, data) => {
        if (err) {
          console.error('[CostExplorer][getCostCategories][Error] Failed to get cost categories');
          reject(err);
        } else {
          console.log('[CostExplorer][getCostCategories] Succeeded to get cost categories');
          resolve(data);
        }
      });
    });
  }

  getCostAndUsage = async (startDate, endDate) => {
    console.log(`[CostExplorer][getCostAndUsage] Start getCostAndUsage between ${startDate} and ${endDate}`);
    const params = {
      Granularity: 'MONTHLY',
      Metrics: [
        'BlendedCost',
        'AmortizedCost',
        'UsageQuantity'
      ],
      TimePeriod: {
        Start: startDate,
        End: endDate
      }
    };
    return new Promise((resolve, reject) => {
      return this.client.getCostAndUsage(params, (err, data) => {
        if (err) {
          console.error('[CostExplorer][getCostAndUsage][Error] Failed to get cost and usage');
          reject(err);
        } else {
          console.log('[CostExplorer][getCostAndUsage] Succeeded to get cost and usage');
          resolve(data);
        }
      });
    });
  }
};
