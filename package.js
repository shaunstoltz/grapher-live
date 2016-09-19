Package.describe({
  name: 'cultofcoders:grapher-live',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.use('tmeasday:check-npm-versions@0.3.1');
  api.use('react-meteor-data@0.2.9');
  api.imply('react-meteor-data@0.2.9');
  api.use('cultofcoders:grapher@1.0.6');

  api.mainModule('main.client.js', 'client');
  api.mainModule('main.server.js', 'server');
});

Package.onTest(function(api) {
});