[![Build Status](https://travis-ci.org/opspec-pkgs/azure.servicebus.queue.create.svg?branch=master)](https://travis-ci.org/opspec-pkgs/azure.servicebus.queue.create)

<img src="icon.svg" alt="icon" height="100px">

# Problem statement

creates an azure servicebus queue (if it doesn't already exist)

# Format

this version of the pkg is in [![opspec 0.1.5](https://img.shields.io/badge/opspec-0.1.5-brightgreen.svg?colorA=6b6b6b&colorB=fc16be)](https://opspec.io/0.1.5/packages.html) format

# Example usage

## Install

```shell
opctl pkg install github.com/opspec-pkgs/azure.servicebus.queue.create#2.1.0
```

## Run

```
opctl run github.com/opspec-pkgs/azure.servicebus.queue.create#2.1.0
```

## Compose

```yaml
op:
  pkg: { ref: github.com/opspec-pkgs/azure.servicebus.queue.create#2.1.0 }
  inputs:
    subscriptionId:
    loginId:
    loginSecret:
    loginTenantId:
    name:
    namespace:
    resourceGroup:
    # params w/ default
    location:
    autoDeleteOnIdle:
    defaultMessageTimeToLive:
    duplicateDetectionHistoryTimeWindow:
    enableBatchedOperations:
    deadLetteringOnMessageExpiration:
    enableExpress:
    enablePartitioning:
    lockDuration:
    loginType:
    maxDeliveryCount:
    maxSizeInMegabytes:
    requiresDuplicateDetection:
    requiresSession:
    supportOrdering:
```

# Support

join us on
[![Slack](https://opspec-slackin.herokuapp.com/badge.svg)](https://opspec-slackin.herokuapp.com/)
or
[open an issue](https://github.com/opspec-pkgs/azure.servicebus.queue.create/issues)

# Releases

releases are versioned according to
[![semver 2.0.0](https://img.shields.io/badge/semver-2.0.0-brightgreen.svg)](http://semver.org/spec/v2.0.0.html)
and [tagged](https://git-scm.com/book/en/v2/Git-Basics-Tagging); see
[CHANGELOG.md](CHANGELOG.md) for release notes

# Contributing

see
[project/CONTRIBUTING.md](https://github.com/opspec-pkgs/project/blob/master/CONTRIBUTING.md)
