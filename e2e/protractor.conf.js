exports.config = {
    specs: ['./src/**/*.e2e-spec.ts'],
    capabilities: {
      browserName: 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4500/',
    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
      print: function () { }
    },
    onPrepare() {
      require('ts-node').register({
        project: require('path').join(__dirname, './tsconfig.json')
      });
    }
  };
  