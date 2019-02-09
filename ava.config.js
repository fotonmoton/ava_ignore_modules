export default {
  files: [
    'src/**/*spec.{js,jsx}',
  ],
  sources: [
    'src/**/*.{js,jsx}',
  ],
  cache: true,
  concurrency: 5,
  failFast: true,
  failWithoutAssertions: true,
  verbose: false,
  compileEnhancements: false,
  require: [
    './config/jsdom.setup.js',
    './config/babel.register.js',
  ],
  babel: {
    extensions: ['jsx'],
  },
};
