/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
  setupFiles: [
    './jest.setup.js',
  ],
  preset: "ts-jest",
};