// export { };
// module.exports = {
//   collectCoverage: true,
//   collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts',
//     '!**/vendor/**'],
//   coverageDirectory: 'coverage',
//   testEnvironment: 'jsdom',
//   transform: {
//     ".(ts|tsx)": "ts-jest"
//   },

//   coveragePathIgnorePatterns: [
//     "/node_modules/",
//     "/coverage",
//     "package.json",
//     "package-lock.json",
//     "reportWebVitals.ts",
//     "setupTests.ts",
//     "index.tsx"
//   ],
// setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
// };


// ========================================
// jest.config.js
// ========================================

// export { };

// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   collectCoverage: true,
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
//   moduleNameMapper: {
//     // Mocks out all these file formats when tests are run
//     "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":"identity-obj-proxy",
//     '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//   },
//   transform: {
//     '^.+\.tsx?$': ['ts-jest', {
//       tsconfig: {
//         jsx: 'react',
//       },
//     }],
//   },
//   testMatch: ["**/*.test.(ts|tsx)"],
//   collectCoverageFrom: [
//     'src/**/*.{ts,tsx}',
//     '!src/**/*.d.ts',
//     '!src/**/*.stories.tsx',
//   ],
//   coveragePathIgnorePatterns: [
//     "/node_modules/",
//     "/coverage",
//     "package.json",
//     "package-lock.json",
//     "reportWebVitals.ts",
//     "setupTests.ts",
//     "index.tsx"
//   ],
//   roots: ["./src"],
//   moduleFileExtensions: ["ts", "tsx", "js"],
//   testPathIgnorePatterns: ["node_modules/"],
// };


module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/index.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};