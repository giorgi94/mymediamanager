module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true
    },
    plugins: [
        "svelte3"
    ],
    globals: {
        ENV: true
    },
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2019,
        ecmaFeatures: {
            jsx: false,
            experimentalObjectRestSpread: true
        }
    },
    extends: [
        "eslint:recommended"
    ],
    rules: {
        camelcase: "off",
        indent: ["error", 4],
        quotes: ["error", "double"],
        semi: ["error", "always"]
    }
};