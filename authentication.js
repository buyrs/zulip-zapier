const testAuth = {
    method: 'POST',
    url: 'https://{{bundle.authData.domain}}/api/v1/external/zapier?api_key={{bundle.authData.api_key}}',
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'ZapierZulipApp'
    },
    body: { 'type': 'auth' }
};

module.exports = {
    type: 'custom',

    fields: [
        {
            key: 'domain',
            label: 'Your Zulip domain',
            type: 'string',
            required: true,
            helpText: 'Found in your browser\'s address bar after logging in to Zulip, e.g. yourzulipdomain.zulipchat.com.'
        },
        {
            key: 'api_key',
            label: 'Your Zulip bot\'s API Key',
            required: true,
            type: 'string',
            helpText: 'Found in Settings -> Your bots. [Learn more...](https://zulipchat.com/api/api-keys#get-a-bots-api-key)'
        }
    ],

    test: testAuth,

    // assuming "result" is a key in the json returned from testAuth
    connectionLabel: (z, bundle) => {
        return bundle.inputData.result;
    }
};
