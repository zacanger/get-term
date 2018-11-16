const { execSync } = require('child_process')

const exec = (cmd, opts) =>
  execSync(cmd, opts).toString('utf8').trim()

module.exports = { exec }
