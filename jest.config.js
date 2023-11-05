/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  testEnvironment: "jest-environment-jsdom",
};
