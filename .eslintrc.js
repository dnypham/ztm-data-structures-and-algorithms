module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "semi": [
            "error",
            "always"
        ],
        "padded-blocks": 0,
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "curly": [
            "error",
            "multi-line"
        ],
        "no-console": [
            "error",
            {
                "allow" : [
                    "warn",
                    "error"
                ]
            }
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ]
    }
};
