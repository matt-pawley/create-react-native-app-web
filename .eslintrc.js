module.exports = {
    "extends": "airbnb",
    "root": true,
    "env": {
        "browser": true
    },
    "settings": {
        "import/resolver": "webpack"
    },

    "parser": "babel-eslint",

    "rules": {
        "indent": ["error", 4, {"SwitchCase": 1}],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-filename-extension" : 0,
        "max-len": ["error", {"code": 120, "tabWidth":4, "ignoreStrings": true, "ignoreTrailingComments": true}],
        "object-shorthand": ["error", "consistent"],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "arrow-parens": ["error", "always"],
        "no-unused-vars": ["warn", {"vars": "all", "args": "none", "varsIgnorePattern": "^logger"}],
        "class-methods-use-this": ["warn"], // Only show a warning
        "jsx-a11y/no-static-element-interactions": 0, // Maybe think about this later.
        "import/extensions": 0, // Maybe think about this later
        "comma-dangle": 0, // Annoying
        "arrow-body-style": 0, // Annoying
        "no-underscore-dangle" : 0,
        "no-undef" : 0,
        "linebreak-style" : 0,
        "import/no-mutable-exports": 0,
        "no-restricted-syntax": 0,
        "react/no-unused-prop-types": [1, { skipShapeProps: true }],
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "no-param-reassign": ["error", { "props": false }],
        "consistent-return": ["warn"]
    },

    "globals": {
        "__DEVELOPMENT__": true,
        "__CLIENT__": true,
        "__SERVER__": true,
        "__DISABLE_SSR__": true,
        "__DEVTOOLS__": true,
        "socket": true,
        "webpackIsomorphicTools": true
    }
}
