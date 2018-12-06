const { exec } = require('./util')

const macTerms = [
  'Hyper',
  'Alacrity',
  'kitty',
  'iTerm2',
  'iTerm',
  'Terminal'
]

const isMacInstalled = (program) => {
  try {
    exec(`osascript -e 'id of application "${program}"' 2>&1>/dev/null`)
    return true
  } catch (_) {
    return false
  }
}

module.exports = () =>
  macTerms.filter(isMacInstalled)[0]
