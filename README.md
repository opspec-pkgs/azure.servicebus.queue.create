[![Build Status](https://github.com/opspec-pkgs/azure.servicebus.queue.create/workflows/build/badge.svg?branch=main)](https://github.com/opspec-pkgs/azure.servicebus.queue.create/actions?query=workflow%3Abuild+branch%3Amain)

<img src="icon.svg" alt="icon" height="100px">

# Problem statement

creates an azure servicebus queue (if it doesn't already exist)

# Example usage

## Visualize

```shell
opctl ui github.com/opspec-pkgs/azure.servicebus.queue.create#2.1.1
```

## Run

```
opctl run github.com/opspec-pkgs/azure.servicebus.queue.create#2.1.1
```

## Compose

```yaml
op:
  ref: github.com/opspec-pkgs/azure.servicebus.queue.create#2.1.1
  inputs:
    loginId:  # 👈 required; provide a value
    loginSecret:  # 👈 required; provide a value
    loginTenantId:  # 👈 required; provide a value
    name:  # 👈 required; provide a value
    namespace:  # 👈 required; provide a value
    resourceGroup:  # 👈 required; provide a value
    subscriptionId:  # 👈 required; provide a value
  ## uncomment to override defaults
  #   autoDeleteOnIdle: "10675199.02:48:05.4775807"
  #   deadLetteringOnMessageExpiration: "false"
  #   defaultMessageTimeToLive: "14.00:00:00"
  #   duplicateDetectionHistoryTimeWindow: "00:00:30"
  #   enableBatchedOperations: "true"
  #   enableExpress: "false"
  #   enablePartitioning: "true"
  #   location: "westus"
  #   lockDuration: "00:00:30"
  #   loginType: "user"
  #   maxDeliveryCount: 10
  #   maxSizeInMegabytes: 1024
  #   requiresDuplicateDetection: "false"
  #   requiresSession: "false"
  #   supportOrdering: "false"
```

# Support

join us on
[![Slack](https://img.shields.io/badge/slack-opctl-E01563.svg)](https://join.slack.com/t/opctl/shared_invite/zt-51zodvjn-Ul_UXfkhqYLWZPQTvNPp5w)
or
[open an issue](https://github.com/opspec-pkgs/azure.servicebus.queue.create/issues)

# Releases

releases are versioned according to
[![semver 2.0.0](https://img.shields.io/badge/semver-2.0.0-brightgreen.svg)](http://semver.org/spec/v2.0.0.html)
and [tagged](https://git-scm.com/book/en/v2/Git-Basics-Tagging); see
[CHANGELOG.md](CHANGELOG.md) for release notes

# Contributing

see
[project/CONTRIBUTING.md](https://github.com/opspec-pkgs/project/blob/main/CONTRIBUTING.md)
