var logger = require('nodejslogger');
logger.init({"file":__dirname+"/logs/debug.log","mod":"DTE"})
module.exports = logger;
