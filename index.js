const msRestAzure = require('ms-rest-azure');
const AzureArmSb = require('azure-arm-sb');
const process = require('process');

const login = async () => {
    console.log('logging in');

    const loginType = process.env.loginType;
    const loginId = process.env.loginId;
    const loginSecret = process.env.loginSecret;

    let response;
    if (loginType === 'sp') {
        // https://github.com/Azure/azure-sdk-for-node/blob/66a255dd882762e93e5b9b92ba63ebb222962d59/runtime/ms-rest-azure/lib/login.js#L414
        response = await msRestAzure.loginWithServicePrincipalSecret(loginId, loginSecret, process.env.loginTenantId);
    } else {
        // https://github.com/Azure/azure-sdk-for-node/blob/66a255dd882762e93e5b9b92ba63ebb222962d59/runtime/ms-rest-azure/index.d.ts#L376
        response = await msRestAzure.loginWithUsernamePassword(loginId, loginSecret, {domain: process.env.loginTenantId});
    }

    console.log('login successful');

    return response;
};

const createOrUpdate = async (credentials) => {
    console.log('creating/updating queue');

    const azureArmSb = new AzureArmSb(credentials, process.env.subscriptionId);

    // see https://github.com/Azure/azure-sdk-for-node/blob/master/lib/services/serviceBusManagement2/lib/operations/queues.js#L2467
    const options = {
        location: process.env.location,
        autoDeleteOnIdle: process.env.autoDeleteOnIdle,
        defaultMessageTimeToLive: process.env.defaultMessageTimeToLive,
        duplicateDetectionHistoryTimeWindow: process.env.duplicateDetectionHistoryTimeWindow,
        enableBatchedOperations: (process.env.enableBatchedOperations === 'true'),
        deadLetteringOnMessageExpiration: (process.env.deadLetteringOnMessageExpiration === 'true'),
        enableExpress: (process.env.enableExpress === 'true'),
        enablePartitioning: (process.env.enablePartitioning === 'true'),
        lockDuration: process.env.lockDuration,
        maxDeliveryCount: parseInt(process.env.maxDeliveryCount),
        maxSizeInMegabytes: parseInt(process.env.maxSizeInMegabytes),
        requiresDuplicateDetection: (process.env.requiresDuplicateDetection === 'true'),
        requiresSession: (process.env.requiresSession === 'true'),
        supportOrdering: (process.env.supportOrdering === 'true'),
    };

    await azureArmSb.queues.createOrUpdate(
        process.env.resourceGroup,
        process.env.namespace,
        process.env.name,
        options
    );

    console.log('creating/updating queue successful');
};

login().then(createOrUpdate).catch(error => {
    console.log(error);
    process.exit(1)
});
