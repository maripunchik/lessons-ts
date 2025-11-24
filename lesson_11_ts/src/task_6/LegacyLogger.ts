export default class LegacyLogger {
  writeLog(message: string): void {
    console.log(`[Legasy] ${message}`);
  }
}
