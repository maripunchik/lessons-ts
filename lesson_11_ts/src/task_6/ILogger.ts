import { LogLevel } from "./types.js";

export default interface ILogger {
  log(message: string, level: LogLevel): void;
}
