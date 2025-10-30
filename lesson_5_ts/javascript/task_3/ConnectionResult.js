import { ConnectionStatus } from "./ConnectionStatus.js";
export const ConnectionResultFactory = {
    connected: (config) => ({
        status: ConnectionStatus.CONNECTED,
        message: `Підключено до ${config.host}: ${config.port} як ${config.username}`
    }),
    failed: (missing) => ({
        status: ConnectionStatus.FAILED,
        message: `Неповна конфігурація. Відсутні поля: ${missing.join(", ")} `
    })
};
