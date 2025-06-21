/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{
      tsconfig: "tsconfig.spec.json",
    }],
  },
  setupFiles: [
    './jest.setup.js',
  ],
  preset: "ts-jest",
};