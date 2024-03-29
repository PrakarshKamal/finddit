module.exports = {
    preset: "react-native",
    setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)",
    ],
    testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
