# @kayahr/oxlint-config

[GitHub] | [NPM]

Shared [oxlint] configuration for my personal TypeScript projects.

## Usage

Install the dependencies:

```bash
$ npm install -DE @kayahr/oxlint-config
```

Create an `.oxlintrc.json` configuration file with the following content (modify environment if necessary):

```json
{
    "$schema": "node_modules/oxlint/configuration_schema.json",
    "extends": [
        "node_modules/@kayahr/oxlint-config/.oxlintrc.json"
    ],
    "env": {
        "node": true,
        "browser": true
    }
}
```

Add the following script line to `package.json`:

```json
{
    "scripts": {
        "test:lint": "oxlint --type-aware",
        "test": "npm run test:lint"
    }
}
```

When using the [OXC VSCode extension] extension then enable `typeAware` flag in `.vscode/settings.json`:

```json
{
    "oxc.typeAware": true
}
```

[GitHub]: https://github.com/kayahr/oxlint-config
[NPM]: https://www.npmjs.com/package/@kayahr/oxlint-config
[oxlint]: https://oxc.rs/docs/guide/usage/linter
[OXC VSCode Extension]: https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode
