/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-jwt',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    serverEndPoint: 'http://128.199.255.96/v1/shared/',

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token',
    authenticationRoute: 'login',
    crossOriginWhitelist:['*'],
  };

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: 'http://128.199.255.96/v1/shared/login',
    identificationField: 'email',
    refreshAccessTokens: true,
    tokenPropertyName: "token",
    tokenAttributeName:"token"
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
