# Problem statement
creates an azure servicebus queue (if it doesn't already exist)

# Example usage

> note: in examples, VERSION represents a version of the azure.servicebus.queue.create pkg

## install

```shell
opctl pkg install github.com/opspec-pkgs/azure.servicebus.queue.create#VERSION
```

## run

```
opctl run github.com/opspec-pkgs/azure.servicebus.queue.create#VERSION
```

## compose

```yaml
op:
  pkg: { ref: github.com/opspec-pkgs/azure.servicebus.queue.create#VERSION }
  inputs: 
    subscriptionId:
    location:
    loginId:
    loginSecret:
    loginTenantId:
    name:
    namespace:
    resourceGroup:
    # begin optional args
    autoDeleteOnIdle:
    defaultMessageTimeToLive:
    duplicateDetectionHistoryTimeWindow:
    enableBatchedOperations:
    enablePartitioning:
    deadLetteringOnMessageExpiration:
    lockDuration:
    loginType:
    maxDeliveryCount:
    maxSizeInMegabytes:
    requiresDuplicateDetection:
    requiresSession:
    supportOrdering:
    # end optional args
```

# Support

join us on [![Slack](https://opspec-slackin.herokuapp.com/badge.svg)](https://opspec-slackin.herokuapp.com/)
or [open an issue](https://github.com/opspec-pkgs/azure.servicebus.queue.create/issues)
