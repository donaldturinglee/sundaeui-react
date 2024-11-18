module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        ".(css|less|scss)$": "identity-obj-proxy",
        "^@components/(.*)$": "<rootDir>/src/components/$1",
        "^@styles/(.*)$": "<rootDir>/src/styles/$1",
        "^@utilities/(.*)$": "<rootDir>/src/utilities/$1",
    },
};