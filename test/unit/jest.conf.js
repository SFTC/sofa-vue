const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
    'ts',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/packages/$1',
  },
  transform: {
    ".*\\.(ts|vue)$": "<rootDir>/node_modules/vue-typescript-jest/preprocessor.js",
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e',
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'packages/**/*.{js,vue,ts}',
    '!**/node_modules/**',
  ],
};
