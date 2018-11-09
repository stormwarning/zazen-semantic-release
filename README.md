# zazen-semantic-release

[![npm version][npm-img]][npm-url]
[![semantic-release][sr-img]][sr-url]

**[semantic-release][]** shareable config for [zazen][]-generated projects.

## Usage

### Local installation

```sh
npm i -D semantic-release @zazen/semantic-release
```

Add the following to your project’s `package.json`:

```json
{
  "release": {
    "extends": "@zazen/semantic-release"
  }
}
```

### Global installation

```sh
npm install -g semantic-release @zazen/semantic-release
semantic-release -e @zazen/semantic-release
```

## Configuration

### Environment variables

| Variable                     | Description                                |
| ---------------------------- | ------------------------------------------ |
| `GH_TOKEN` or `GITHUB_TOKEN` | **Required.** To authenticate with GitHub. |
| `NPM_TOKEN`                  | **Required.** To authenticate with npm.    |

### Additional options

This shareable config uses the [`@semantic-release/git`][],
[`@semantic-release/npm`][], [`@semantic-release/changelog`][], and
[`@semantic-release/github`][] plugins. See the documentation of each plugins
for additional options.

[npm-url]: https://www.npmjs.com/package/@zazen/semantic-release

[npm-img]: https://img.shields.io/npm/v/@zazen/semantic-release.svg?style=flat-square

[sr-url]: https://github.com/semantic-release/semantic-release

[sr-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square

[semantic-release]: https://github.com/semantic-release/semantic-release

[zazen]: https://github.com/stormwarning/zazen

[`@semantic-release/git`]: https://github.com/semantic-release/git

[`@semantic-release/npm`]: https://github.com/semantic-release/npm

[`@semantic-release/changelog`]: https://github.com/semantic-release/changelog

[`@semantic-release/github`]: https://github.com/semantic-release/github
