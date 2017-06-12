const azure = require('azure');

const serviceBusService = azure.createServiceBusService(process.env.connectionString);

// see https://github.com/Azure/azure-sdk-for-node/blob/master/lib/services/serviceBus/lib/servicebusservice.js#L730
const options = {
    MaxSizeInMegabytes: process.env.maxSizeInMb,
    DefaultMessageTimeToLive: process.env.defaultMsgTtl,
    RequiresSession: process.env.enableSessions,
    RequiresDuplicateDetection: process.env.enableDuplicateDetection,
    DuplicateDetectionHistoryTimeWindow: process.env.duplicateDetectionWindow,
    DeadLetteringOnMessageExpiration: process.env.enableDeadLettering,
    EnablePartitioning: process.env.enablePartitioning,
};

serviceBusService.createQueueIfNotExists(
    process.env.name,
    options,
    error => {
        if (error) {
            throw error;
        }
        // Topic was created or exists
        console.log('topic created or exists.');
    }
);