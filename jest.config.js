module.exports = {
  collectCoverage: true,
  setupFilesAfterEnv: ['./src/setupTests.js'],
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 85,
      statements: -150,
    },
  },
  clearMocks: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testRegex: '.*\\.(test|spec).js$',
  moduleFileExtensions: ['js']
};
