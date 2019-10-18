# npm-install-package-info

This Node module returns the name and version of an NPM package of any source `npm install` can handle (including Git-Host, Github, Tarball files/URLs, scoped packages etc.). It synchronously performs a dry-run of `npm install` and grabs the info from stdout.

## Install

`npm install --save npm-install-package-info`

## Usage

```
const packageInfo = require('npm-install-package-info')

packageInfo('debug') // { name: 'debug', version: '4.1.1' }
packageInfo('debug@^2') // { name: 'debug', version: '2.6.9' }
packageInfo('github:jvolker/Openframe-Processing') // { name: 'openframe-processing', version: '0.2.0' }
packageInfo('/Users/Erik/Documents/MyProject') // accordingly
```

### On error

Returns `null` on error. For example if the package can't be found.

### Suppress error messages

To disable error messages there is a second optional parameter:
```
packageInfo('/Users/Erik/Documents/MyProject', true)
```

## Tested

Manually tested with the following NPM versions: 
- 6.9.0
- 5.6.0
- 3.10.10

## Why?

`npm view` doesn't support the same amount of sources.