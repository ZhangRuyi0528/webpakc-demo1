/* eslint-disable */

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "indent": ["error", 4],
        // "no-console": 2,
        "block-spacing": ["error", "always"],
        "quotes": ["error", "single"],
        "no-multiple-empty-lines": ["error", {max: 2}],
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
};