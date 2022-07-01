const winston = require('winston');
require('winston-daily-rotate-file');

// var logger = [...]


 
const logger = winston.createLogger({
    transports: [
      new (winston.transports.DailyRotateFile) ({
        level: 'info',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        filename: 'icedream-%DATE%.log',
        dirname: './logs',
        maxSize: '100m',
        maxFiles: '28',
        handleExceptions: true
      }),
      new (winston.transports.DailyRotateFile)({
        level: 'error',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        filename: 'icedream_error-%DATE%.log',
        dirname: './logs',
        maxSize: '100m',
        maxFiles: '28',
        handleExceptions: true
      }),
      new (winston.transports.Console) ({
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorized: true
      })
    ],
    exitOnError: false
});
 logger.stream = {
write: function(message, encoding) {
logger.info(message);
}};
module.exports = logger;