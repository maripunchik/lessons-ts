import ILogger from "./ILogger.js";
import LegacyLogger from "./LegacyLogger.js";
import { LogLevel } from "./types.js";

export default class LegacyLoggerAdapter implements ILogger {
  constructor(private legacyLogger: LegacyLogger) {}

  log(message: string, level: LogLevel): void {
    const prefix = `[${level.toUpperCase()}]`;
    this.legacyLogger.writeLog(`${prefix} ${message}`);
  }
}
