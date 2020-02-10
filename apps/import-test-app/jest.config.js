module.exports = {
  name: 'import-test-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/import-test-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
