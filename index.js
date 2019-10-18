const child_process = require("child_process")

module.exports = function (source, silent = false) {
  source = source.replace(/(\s+)/g, '\\$1') //escape spaces
  
  let output 
  try {
    output = child_process.execSync('npm install ' + source + ' --dry-run --loglevel=' + (silent ? 'silent' : 'error')).toString()
  }
  catch (error) {
    // console.log(error.status, error.message)
    // error.stderr
    // error.stdout
  }
  // console.log(output)

  const regex = / ([^ ]*)@([^ \n]*)/gm

  const match = regex.exec(output)
  
  let result = null
  if (match && match.length > 2) result = {
      name : match[1],
      version : match[2]
  }
  
  return result
}