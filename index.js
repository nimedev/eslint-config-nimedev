module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "max-len": [
      "error",
      80,
      {
        "ignorePattern": "/",
        "ignoreUrls": true
      }
    ],
    "no-trailing-spaces": [
      "error"
    ],
    "no-whitespace-before-property": "error",
    "quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "require-jsdoc": [
      "error",
      {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true
        }
      }
    ],
    "semi": [
      2,
      "never"
    ],
    "spaced-comment": [
      "error",
      "always"
    ]
  }
}