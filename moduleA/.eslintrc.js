module.exports = {
   "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "plugins": [
      "flowtype",
      "flowtype-errors"
    ],
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        "flowtype-errors/show-errors": 2,
        "flowtype-errors/show-warnings": 2,
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};