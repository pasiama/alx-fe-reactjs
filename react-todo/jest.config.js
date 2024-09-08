module.exports = {
      moduleNameMapper: {
            '\\.(css|less)$': 'identity-obj-proxy'
          },
          // Transform config to use Babel
          testEnvironment: 'jsdom',
          setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
      transform: {
        "^.+\\.(js|jsx)$": "babel-jest"
      },
      // Add this if you're using ESM modules
      extensionsToTreatAsEsm: [".jsx"],
      // Other Jest configurations
    };
    