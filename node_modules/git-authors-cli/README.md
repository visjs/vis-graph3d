# git-authors-cli

![Last version](https://img.shields.io/github/tag/Kikobeats/git-authors-cli.svg?style=flat-square)
[![Dependency status](https://img.shields.io/david/Kikobeats/git-authors-cli.svg?style=flat-square)](https://david-dm.org/Kikobeats/git-authors-cli)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/git-authors-cli.svg?style=flat-square)](https://david-dm.org/Kikobeats/git-authors-cli#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/git-authors-cli.svg?style=flat-square)](https://www.npmjs.org/package/git-authors-cli)

![](demo.png)

> Detects project contributors and add it into `package.json`

Add credits for people that help you ship code is important, but it is a task easy to forget. This tool makes it easy to integrate as part of your release process, so your contributors are always up to date ✨.

## Install

```bash
$ npm install git-authors-cli --global
```

## CLI

```bash
$ git-authors-cli --help

  Print all contributors and add it into package.json

  Usage
    $ git-authors-cli [options]

  Options
    --cwd    Specify the path for running the command (defaults to process.cwd())
    --save   Write contributors into package.json if it exists (defaults to true)
    --print  Show information from the terminal (defaults to true)

  Examples
    $ git-authors-cli # Get contributors for the current path project.
    $ git-authors-cli ~/Projects/metascraper # Get contributors for a specific path project.
```

## License

**git-authors-cli** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/git-authors-cli/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/git-authors-cli/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
