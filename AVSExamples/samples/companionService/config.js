/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.
 *
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.
 *
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: 'amzn1.application-oa2-client.af6737d571504c758b2906706e480600',
    clientSecret: '7d42d61ed176e7e48d8847b919da459b27eab4f210765485f58a3533ee79d4fd',
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: 'amazon.com',
    lwaApiHost: 'api.amazon.com',
    validateCertChain: true,
    sslKey: '/Users/agangwar/dev/AVSExamples/samples/javaclient/certs/server/node.key',
    sslCert: '/Users/agangwar/dev/AVSExamples/samples/javaclient/certs/server/node.crt',
    sslCaCert: '/Users/agangwar/dev/AVSExamples/samples/javaclient/certs/ca/ca.crt',
    products: {"my_device": ["123456"]},
};

module.exports = config;
