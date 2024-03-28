# commitlint-rs-npm

Lint commit messages with conventional commit messages

> **npm** integration for [commitlint-rs](https://github.com/KeisukeYamashita/commitlint-rs) without any overhead so using full power of `commitlint-rs` CLI performance and feature

## Documentations

Look at [official documentation](https://keisukeyamashita.github.io/commitlint-rs)

## Installation

```sh
npm install -g commitlint-rs-npm
# or
yarn install -g commitlint-rs-npm
# or
bun add -g commitlint-rs-npm
```

## Environment variables

| Name           | Description                                                                                     | Required |
| -------------- | ----------------------------------------------------------------------------------------------- | -------- |
| `GITHUB_TOKEN` | For [GitHub API](https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting) | Yes      |

## Usage

See [Documentations](#documentations), requires [Environment variables](#environment-variables)

## Similar projects

- [commitlint](https://commitlint.js.org)
- [commitlint-rs](https://github.com/KeisukeYamashita/commitlint-rs)
- [commitlint-go](https://github.com/conventionalcommit/commitlint)
- [commitlint-sh](https://github.com/dalisoft/commitlint-sh)

## Local Development

### Git config

After cloning, run this command within project folder

```sh
git config --local include.path ../.gitconfig
```

## License

Apache-2.0
