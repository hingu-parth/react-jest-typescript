// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  timers: "modern", // Enable modern fake timers
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  // ...other configuration
};
