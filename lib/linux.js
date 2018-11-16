const { exec } = require('./util')

const linuxTerms = [
  process.env.TERMINAL,
  'x-terminal-emulator', // debian
  'terminal', // arch, i think?

  // fancy terminals
  'Eterm',
  'alacritty',
  'aterm',
  'eterm',
  'gnome-terminal',
  'guake',
  'hyper',
  'kitty',
  'konsole',
  'lilyterm',
  'lxterminal',
  'mate-terminal',
  'mrxvt',
  'qterminal',
  'roxterm',
  'sakura',
  'terminator',
  'terminix',
  'terminology',
  'termit',
  'termite',
  'tilda',
  'tilix',
  'xfce4-terminal',
  'yakuake',

  // less fancy terminals
  'stterm', // debian
  'st', // not-debian -- might conflict with the st server package...

  // defaults
  'urxvt',
  'uxterm',
  'rxvt',
  'xterm',
  process.env.COLORTERM,
  process.env.XTERM
].filter(Boolean)

const isLinuxInstalled = (program) => {
  try {
    exec(`hash ${program} 2>/dev/null`)
    return true
  } catch (_) {
    return false
  }
}

module.exports = () =>
  linuxTerms.filter(isLinuxInstalled)[0]
