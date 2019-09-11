# serverless-aws-koa-skeleton

## Requirements

- node 8.x

## Setup

```bash
npm ci
cp ./config/config.example.yml ./config/dev.yml
```

## Development

You can build and run an offline local Lambda server.

```bash
npm run dev
```

### Watching

```bash
npm run test:watch
```

## Testing

### Unit Tests

```bash
npm test
```

### Integration Tests

Integration tests require an actively running local server.

1. First start the development server

```bash
npm run dev
```

2. In a different terminal/console, run the tests:

```bash
npm run test:integration
```

Additionally, you should be able to run:

```bash
npm run test:offline
```

### Coverage

```bash
npm run test:cover
```

## Deployment

_Note: This is a work in progress_

Any changes to [serverless.yml](serverless.yml) require a full rebuild of the deployment, which takes additional time as there may be configuration changes within AWS.

The deployment can be achieved via the following:

```bash
sls deploy -s stage -r us-west-2
```

If you only want to update the behavior of a single function, serverless is able to deploy a new version of that function only without the need to rebuild:

```bash
sls deploy function -f your-function-name
```

### Debugging

After deploying, you can use `serverless` to listen to logs which is helpful while debugging.

**NOTE:** Set the `DEBUG` parameter in the config to match the appropriate section of the application.

```bash
sls deploy -s stage -r us-west-2
sls logs -f auth -s stage -r us-west-2 -t
```
