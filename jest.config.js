export default {
  // testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^jet-validators$": "<rootDir>/src/__mocks__/jet-validators.js",
    "^jet-validators/utils$": "<rootDir>/src/__mocks__/jet-validators-utils.js",
    "^jet-env$": "<rootDir>/src/__mocks__/jet-env.js"
  }
};