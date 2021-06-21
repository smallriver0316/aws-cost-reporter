const { createMessage } = require('../src/lambda/handler');

const TEST_DATA1 = {
  GroupDefinitions: [
    {
      Type: 'DIMENSION',
      Key: 'SERVICE'
    }
  ],
  ResultsByTime: [
    {
      TimePeriod: {
        Start: '2021-06-01',
        End: '2021-06-20'
      },
      Total: {},
      Groups: [
        {
          Keys: [
            'AWS Amplify'
          ],
          Metrics: {
            AmortizedCost: {
              Amount: '0',
              Unit: 'USD'
            },
            UnblendedCost: {
              Amount: '0',
              Unit: 'USD'
            },
            UsageQuantity: {
              Amount: '0.0000179913',
              Unit: 'N/A'
            }
          }
        },
        {
          Keys: [
            'AWS Cost Explorer'
          ],
          Metrics: {
            AmortizedCost: {
              Amount: '0.23',
              Unit: 'USD'
            },
            UnblendedCost: {
              Amount: '0.23',
              Unit: 'USD'
            },
            UsageQuantity: {
              Amount: '23',
              Unit: 'N/A'
            }
          }
        },
        {
          Keys: [
            'AWS Key Management Service'
          ],
          Metrics: {
            AmortizedCost: {
              Amount: '0.0319444447',
              Unit: 'USD'
            },
            UnblendedCost: {
              Amount: '0.0319444447',
              Unit: 'USD'
            },
            UsageQuantity: {
              Amount: '49.0319444447',
              Unit: 'N/A'
            }
          }
        },
        {
          Keys: [
            'AWS Lambda'
          ],
          Metrics: {
            AmortizedCost: {
              Amount: '0',
              Unit: 'USD'
            },
            UnblendedCost: {
              Amount: '0',
              Unit: 'USD'
            },
            UsageQuantity: {
              Amount: '30.678',
              Unit: 'N/A'
            }
          }
        },
        {
          Keys: [
            'Amazon DynamoDB'
          ],
          Metrics: {
            AmortizedCost: {
              Amount: '0',
              Unit: 'USD'
            },
            UnblendedCost: {
              Amount: '0',
              Unit: 'USD'
            },
            UsageQuantity: {
              Amount: '0.0000000708',
              Unit: 'N/A'
            }
          }
        },
        {
          Keys: [
            'Amazon EC2 Container Registry (ECR)'
          ],
          Metrics: {
            AmortizedCost: {
              Amount: '0.0115639504',
              Unit: 'USD'
            },
            UnblendedCost: {
              Amount: '0.0115639504',
              Unit: 'USD'
            },
            UsageQuantity: {
              Amount: '0.1156395796',
              Unit: 'N/A'
            }
          }
        },
        {
          Keys: [
            'EC2 - Other'
          ],
          Metrics: {
            AmortizedCost: {
              Amount: '8.9280007249',
              Unit: 'USD'
            },
            UnblendedCost: {
              Amount: '8.9280007249',
              Unit: 'USD'
            },
            UsageQuantity: {
              Amount: '144.0000198701',
              Unit: 'N/A'
            }
          }
        },
        {
          Keys: [
            'Amazon Elastic Compute Cloud - Compute'
          ],
          Metrics: {
            AmortizedCost: {
              Amount: '0',
              Unit: 'USD'
            },
            UnblendedCost: {
              Amount: '0',
              Unit: 'USD'
            },
            UsageQuantity: {
              Amount: '0.0023160289',
              Unit: 'N/A'
            }
          }
        },
        {
          Keys: [
            'Amazon Relational Database Service'
          ],
          Metrics: {
            AmortizedCost: {
              Amount: '0.0051019819',
              Unit: 'USD'
            },
            UnblendedCost: {
              Amount: '0.0051019819',
              Unit: 'USD'
            },
            UsageQuantity: {
              Amount: '0.2238210857',
              Unit: 'N/A'
            }
          }
        },
        {
          Keys: [
            'Amazon Simple Notification Service'
          ],
          Metrics: {
            AmortizedCost: {
              Amount: '0',
              Unit: 'USD'
            },
            UnblendedCost: {
              Amount: '0',
              Unit: 'USD'
            },
            UsageQuantity: {
              Amount: '139.0000105882',
              Unit: 'N/A'
            }
          }
        },
        {
          Keys: [
            'Amazon Simple Storage Service'
          ],
          Metrics: {
            AmortizedCost: {
              Amount: '0.0010157205',
              Unit: 'USD'
            },
            UnblendedCost: {
              Amount: '0.0010157205',
              Unit: 'USD'
            },
            UsageQuantity: {
              Amount: '565.0460592055',
              Unit: 'N/A'
            }
          }
        },
        {
          Keys: [
            'Amazon Transcribe'
          ],
          Metrics: {
            AmortizedCost: {
              Amount: '0',
              Unit: 'USD'
            },
            UnblendedCost: {
              Amount: '0',
              Unit: 'USD'
            },
            UsageQuantity: {
              Amount: '61.6533125',
              Unit: 'N/A'
            }
          }
        },
        {
          Keys: [
            'AmazonCloudWatch'
          ],
          Metrics: {
            AmortizedCost: {
              Amount: '0',
              Unit: 'USD'
            },
            UnblendedCost: {
              Amount: '0',
              Unit: 'USD'
            },
            UsageQuantity: {
              Amount: '2.0198205378',
              Unit: 'N/A'
            }
          }
        },
        {
          Keys: [
            'Tax'
          ],
          Metrics: {
            AmortizedCost: {
              Amount: '0.91',
              Unit: 'USD'
            },
            UnblendedCost: {
              Amount: '0.91',
              Unit: 'USD'
            },
            UsageQuantity: {
              Amount: '0',
              Unit: 'N/A'
            }
          }
        }
      ],
      Estimated: true
    }
  ],
  DimensionValueAttributes: []
};

const TEST_DATA2 = {
  ResultsByTime: [
    {
      TimePeriod: {
        Start: '2021-06-01',
        End: '2021-06-09'
      },
      Total: {
        AmortizedCost: {
          Amount: '9.8893612034',
          Unit: 'USD'
        },
        UnblendedCost: {
          Amount: '9.8893612034',
          Unit: 'USD'
        },
        UsageQuantity: {
          Amount: '618.6450113655',
          Unit: 'N/A'
        }
      },
      Groups: [],
      Estimated: true
    }
  ],
  DimensionValueAttributes: []
};

describe('Test of createMessage', () => {
  test('test for divided results', () => {
    const expected = [
      'From 2021-06-01 to 2021-06-20',
      'Current Total Cost in this month: 10.1176268224 USD',
      '----------',
      'AWS Cost Explorer: 0.23 USD\nUsage Quantity: 23',
      'AWS Key Management Service: 0.0319444447 USD\nUsage Quantity: 49.0319444447',
      'Amazon EC2 Container Registry (ECR): 0.0115639504 USD\nUsage Quantity: 0.1156395796',
      'EC2 - Other: 8.9280007249 USD\nUsage Quantity: 144.0000198701',
      'Amazon Relational Database Service: 0.0051019819 USD\nUsage Quantity: 0.2238210857',
      'Amazon Simple Storage Service: 0.0010157205 USD\nUsage Quantity: 565.0460592055',
      'Tax: 0.91 USD\nUsage Quantity: 0'
    ].join('\n\n');

    const result = createMessage(TEST_DATA1);
    expect(result).toEqual(expected);
  });

  test('test for consolidated result', () => {
    const expected = [
      'From 2021-06-01 to 2021-06-09',
      'Current Total Cost in this month: 9.8893612034 USD',
      'Usage Quantity: 618.6450113655'
    ].join('\n\n');

    const result = createMessage(TEST_DATA2);
    expect(result).toEqual(expected);
  });
});
