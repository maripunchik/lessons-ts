export default class LegacyLoggerAdapter {
    constructor(legacyLogger) {
        this.legacyLogger = legacyLogger;
    }
    log(message, level) {
        const prefix = `[${level.toUpperCase()}]`;
        this.legacyLogger.writeLog(`${prefix} ${message}`);
    }
}
