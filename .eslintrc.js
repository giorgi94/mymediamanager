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
    },
    extends: [
        "eslint:recommended"
    ],
    rules: {
        "no-console": "off",
        "no-debugger": "off",
        camelcase: "off",
        indent: ["error", 4],
        quotes: ["error", "double"],
        semi: ["error", "always"]
    }
};