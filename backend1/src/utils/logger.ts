import winston from "winston";
const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.simple()
);
const fileFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.printf(({ timestamp, level, message }) => {
    return `$ ${level.toUpperCase()}: ${message}`;
  })
);
export const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({
      format: consoleFormat,
    }),
    new winston.transports.File({
      filename: "access.log",
      format: fileFormat,
    }),
  ],
});

export const error_logger = winston.createLogger({
  level: "error",
  transports: [
    new winston.transports.Console({
      format: consoleFormat,
    }),
    new winston.transports.File({
      filename: "error.log",
      format: fileFormat,
    }),
  ],
});











