const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jest-environment-node',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.cjs'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    '!app/**/*.d.ts',
    '!app/layout.{js,jsx,ts,tsx}',
    '!app/not-found.{js,jsx,ts,tsx}',
    '!app/loading.{js,jsx,ts,tsx}',
  ],
  coverageProvider: 'v8',
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'clover',
    'text-summary'
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  testMatch: [
    '**/tests/unit/**/*.test.{js,jsx,ts,tsx}',
    '**/tests/integration/**/*.test.{js,jsx,ts,tsx}',
    '**/tests/*.test.{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/cypress/'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/utils/(.*)$': '<rootDir>/app/utils/$1',
    '^@/api/(.*)$': '<rootDir>/app/api/$1',
    '^@/lib/(.*)$': '<rootDir>/app/lib/$1',
    '^@/hooks/(.*)$': '<rootDir>/app/hooks/$1',
    '^@/data/(.*)$': '<rootDir>/app/data/$1',
    '^@/models/(.*)$': '<rootDir>/app/models/$1',
    '^@/(.*)$': '<rootDir>/app/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
