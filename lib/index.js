const os = process.platform || require('os').platform()

module.exports = ['linux', 'darwin', 'win32'].includes(os)
  ? require(`./${os}`)
  : require('./linux')
