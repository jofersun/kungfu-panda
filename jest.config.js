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
  coverageReporters: ["json", "lcov", "text"],
  //json file name: coverage-final.json
  //html file name: index.html
  //lcov file name: lcov-report/index.html
  //text: show on console
  coverageDirectory: "coverage",
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        //configuration can be saved on file ./jesthtmlreporter.config.josn
        pageTitle: "Unit Test Report for Movie Catalogue",
        outputPath: "coverage/jest-html-reporter/index.html",
        includeFailureMsg: true,
        openReport: true,
        darkTheme: true,
        // urlForTestFiles: "/src/utils/index.test.js",
        // customInfos: [
        //   { title: "test1", value: "test1" },
        //   { title: "test2", value: "test2" },
        // ],
        enableMergeData: true,
      },
    ],
  ],

  // testResultsProcessor: "./node_modules/jest-html-reporter",
};
