const isWindows = require('platform-is').isWindows

module.exports = s => isWindows ? s.toLowerCase() : s