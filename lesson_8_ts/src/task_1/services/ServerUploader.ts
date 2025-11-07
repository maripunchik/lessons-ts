
import IUploader from "../interfaces/IUploader.js";

export default class ServerUploader implements IUploader{
	upload(filePath: string): void {
		console.log(`Uploading ${filePath} to server...`);
	}
}