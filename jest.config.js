module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts'],
  testPathIgnorePatterns: ['.*/dist/.*', '.*dist.*'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  // Keep the snapshot format used by the existing snapshots (Jest 29 changed it).
  snapshotFormat: {
    escapeString: true,
    printBasicPrototype: true,
  },
};
