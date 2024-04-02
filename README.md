# @bruceshih/prettier-config-vue

![version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FBruceShih%2Fprettier-config-vue%2Fmain%2Fpackage.json&query=%24.version&label=version)
![ci](https://github.com/BruceShih/prettier-config-vue/actions/workflows/ci.yml/badge.svg)

This is my Prettier config for Vue projects. Can also be used for JavaScript projects.

## Install

`pnpm i -D prettier @bruceshih/prettier-config-vue`

## Usage

```javascript
// prettier.config.js
import bruceshih from '@bruceshih/prettier-config-vue'

export default {
  ...bruceshih,
  // other rules
}
```
