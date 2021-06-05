'use strict';
module.exports = class CostExplorer {
    constructor(client) {
        this.client = client;
    }

    getCostCategories = async () => {
        const params = {
            TimePeriod: {
                Start: '2021-05-01',
                End: '2021-05-31',
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

    // getCostAndUsage = () => {}
}
