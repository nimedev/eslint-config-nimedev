# eslint-config-nimedev
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/eslint-config-nimedev.svg
[npm-url]: https://npmjs.org/package/eslint-config-nimedev

> An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for nimedev JavaScript rules

## Installation

```console
$ npm install eslint-config-nimedev
```

## Usage

Set your eslint config to:

```json
{
  "extends": "nimedev"
}
```

*Note: I omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `no-console` rule:


```json
{
  "extends": "nimedev",
  "rules": {
    "indentation": "tab",
    "no-console": 0
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE.md)