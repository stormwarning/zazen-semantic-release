# zazen-semantic-release

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
