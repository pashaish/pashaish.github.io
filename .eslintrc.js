module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "import/prefer-default-export": "off",
        "react/prop-types": "off",
        "no-continue": "off",
        "no-case-declarations": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "class-methods-use-this": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "no-restricted-syntax": "off"
    }
};