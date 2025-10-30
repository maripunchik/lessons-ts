import { ConnectionStatus } from "./ConnectionStatus.js";
import IDatabaseConfig from "./IDatabaseConfig.js";

export interface ConnectionResult {
	status: ConnectionStatus
	message:string
}

export const ConnectionResultFactory ={
	connected:(config: IDatabaseConfig): ConnectionResult=>({
		status:ConnectionStatus.CONNECTED,
		message: `Підключено до ${config.host}: ${config.port} як ${config.username}`
	}),

	failed: (missing: string[]): ConnectionResult=> ({
		status: ConnectionStatus.FAILED,
		message: `Неповна конфігурація. Відсутні поля: ${missing.join(", ")} `
	})
}