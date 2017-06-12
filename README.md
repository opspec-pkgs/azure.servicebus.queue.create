# problem statement
creates an azure servicebus queue (if it doesn't already exist)

# example usage

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
run:
  op:
    pkg: { ref: github.com/opspec-pkgs/azure.servicebus.queue.create#VERSION }
    inputs: 
      connectionString:
      name:
      maxSizeInMb:
      defaultMsgTtl:
      lockDuration:
      enableSessions:
      enableDuplicateDetection:
      duplicateDetectionWindow:
      enableDeadLettering:
      enablePartitioning:
```
