const { format, createLogger, transports } = require("winston");

const { LOG_LEVEL } = require("../../config");

const formats = format.combine(
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.ssss" }),
  format.simple(),
  format.splat(),
  format.printf(
    (info) =>
      `${info.timestamp} ${info.level.toUpperCase()}: [email: ${
        info.message.email
      }] [location: ${info.message.location}] [procType: ${
        info.message.proc_type
      }] [log: ${info.message.log}]`
  )
);

// 2023-08-09 12:09:33.1234 INFO: [email:xxx] [location:xxx] ...

const logger = createLogger({
  level: LOG_LEVEL,
  transports: [new transports.Console({ format: formats })],
});

module.exports = logger;
