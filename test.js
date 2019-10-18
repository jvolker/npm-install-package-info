const packageInfo = require('./index')

console.log(packageInfo('debug')) // just NPM name
console.log(packageInfo('debug@^2')) // semantic version 2.x.x
console.log(packageInfo('github:jvolker/Openframe-Processing')) // package on github
console.log(packageInfo('/Path/To/Some/Local/NPM/Package', true)) // local package with error messages suppressed 