'use strict';
module.exports = class SNS {
  constructor (client) {
    this.client = client;
  }

  publish = async (message) => {
    console.log('[SNS][publish] Start publish SNS Topic');
    const params = {
      TopicArn: process.env.SNS_TOPIC_ARN,
      Subject: 'AWS Cost Weekly Report',
      Message: message
    };
    return new Promise((resolve, reject) => {
      return this.client.publish(params, (err, data) => {
        if (err) {
          console.error('[SNS][publish][Error] Failed to publish SNS topic');
          reject(err);
        } else {
          console.log('[SNS][publish] Succeeded to publish SNS topic');
          resolve(data);
        }
      });
    });
  }
};
