# commitlint-rs-npm

Lint commit messages with conventional commit messages

> **npm** integration for [commitlint-rs](https://github.com/KeisukeYamashita/commitlint-rs) without any overhead so using full power of `commitlint-rs` CLI performance and feature

## Documentations

Look at [official documentation](https://keisukeyamashita.github.io/commitlint-rs)

## Motivation

> This package is specifically designed for direct Command-Line Interface (CLI) interaction or as an extension for Visual Studio Code.

### The functionality for npx or bunx is not included and is not anticipated to be incorporated in the future

## How this is fast?

This project leverages the [binary2npm](https://github.com/dalisoft/binary2npm) utility to streamline the acquisition of platform-specific binaries. The binaries provided by the author are highly optimized, surpassing the performance of the traditional **Node.js** `bin.js` approach. By invoking the binaries directly, we circumvent unnecessary overhead, resulting in significantly reduced startup times and enhanced efficiency.

## Installation

```sh
npm install dalisoft/commitlint-rs-npm -D
# or
yarn install dalisoft/commitlint-rs-npm -D
# or
bun add dalisoft/commitlint-rs-npm -D
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
