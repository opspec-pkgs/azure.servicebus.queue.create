const azure = require('azure');

const serviceBusService = azure.createServiceBusService(process.env.connectionString);

// see https://github.com/Azure/azure-sdk-for-node/blob/master/lib/services/serviceBus/lib/servicebusservice.js#L730
const options = {
    MaxSizeInMegabytes: process.env.maxSizeInMb,
    DefaultMessageTimeToLive: process.env.defaultMsgTtl,
    RequiresSession: (process.env.enableSessions === 'true'),
    RequiresDuplicateDetection: (process.env.enableDuplicateDetection === 'true'),
    DuplicateDetectionHistoryTimeWindow: process.env.duplicateDetectionWindow,
    DeadLetteringOnMessageExpiration: (process.env.enableDeadLettering === 'true'),
    EnablePartitioning: (process.env.enablePartitioning === 'true'),
};

serviceBusService.createQueueIfNotExists(
    process.env.name,
    options,
    error => {
        if (error) {
            throw error;
        }
        // Queue was created or exists
        console.log('queue created or exists.');
    }
);