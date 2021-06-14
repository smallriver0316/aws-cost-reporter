# aws-cost-reporter

Lambda set to send information of cost explorer.

You will receive such a following message by email.

```txt
Subject: AWS Cost Weekly Report

From YYYY-MM-01 to YYYY-MM-DD(today)

Current Cost in this month: XXXXX USD

----------

AWS Cost Explorer: XXXX USD

AWS Key Management Service: XXXX USD

Amazon EC2 Container Registry (ECR): XXXX USD

EC2 - Other: XXXX USD

Amazon Relational Database Service: XXXX USD

Amazon Simple Storage Service: XXXX USD

Tax: XXXX USD
```

## How to prepare

It is necessary to write email address into config/.config.{stage}.yml for SNS topic subscription.

```yml
EMAIL: <subscription email of SNS>
```

Install libraries

```bash
npm install
```

## How to deploy

```bash
npx serverless deploy -v
```

## How to remove deployment services

```bash
npx serverless remove -v
```
