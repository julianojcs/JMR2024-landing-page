// Jest configuration for ES Modules support
const config = {
  testEnvironment: 'node',

  // Setup files
  // setupFilesAfterEnv: ['<rootDir>/tests/setup.js'], // Desabilitado temporariamente

  // Test matching
  testMatch: [
    '**/tests/unit/**/*.test.{js,jsx}',
    '**/tests/integration/**/*.test.{js,jsx}',
    '**/tests/**/*.test.{js,jsx}', // Inclui todas as subpastas em tests
  ],

  // Coverage
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'app/models/**/*.{js,jsx}',
    'app/components/**/*.{js,jsx}',
    'app/api/**/*.{js,jsx}',
    '!app/models/**/index.js',
    '!app/**/layout.{js,jsx}',
    '!app/**/loading.{js,jsx}',
    '!app/**/not-found.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },

  // Module resolution
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '^@/models/(.*)$': '<rootDir>/app/models/$1',
    '^@/api/(.*)$': '<rootDir>/app/api/$1',
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    // Mock de arquivos CSS
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Mock de arquivos de imagem
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },

  // Transform configuration
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', {
          targets: { node: 'current' },
          modules: 'auto'
        }],
        ['@babel/preset-react', {
          runtime: 'automatic'
        }]
      ]
    }]
  },

  // Ignore patterns
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/cypress/',
    '.*/disabled/.*'
  ],

  transformIgnorePatterns: [
    'node_modules/(?!(mongodb)/)'
  ],

  // Clear mocks
  clearMocks: true,

  // Verbose output
  verbose: true,

  // Forçar saída após os testes (para resolver problema de handles abertos)
  forceExit: true,

  // Timeout para testes
  testTimeout: 10000,

  // Detectar handles abertos durante desenvolvimento
  detectOpenHandles: false,
};

module.exports = config;
