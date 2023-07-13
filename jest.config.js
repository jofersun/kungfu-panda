module.exports = {
  collectCoverage: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
    "^.+\\.css$": "jest-transform-css",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
