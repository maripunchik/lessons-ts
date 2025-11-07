
import ILogger from "../interfaces/ILogger.js";

export default class Logger implements ILogger{
	log(message: string): void {
		const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] LOG: ${message}`)
	}
}