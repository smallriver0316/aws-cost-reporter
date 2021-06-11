# aws-cost-repoter

Lambda set to send information of cost explorer.

You received following message by email.

```txt
From YYYY-MM-01 to YYYY-MM-DD(today)
Current Cost in this month: XXXX USD
Usage Quantity: ZZZZ
```

## How to prepare

It is necessary to write email address into config/.config.{stage}.yml for SNS topic subscription.

```yml
EMAIL: <subscription email of SNS>
```

## How to deploy

```bash
npx serverless deploy -v
```

## How to remove deployment services

```bash
npx serverless remove -v
```
