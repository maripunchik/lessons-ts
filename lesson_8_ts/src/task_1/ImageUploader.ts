
import IUploader from "./interfaces/IUploader.js";
import ICompressor from "./interfaces/ICompressor.js";
import ILogger from "./interfaces/ILogger.js";

export default class ImageUploader{
	constructor(
		private uploader: IUploader,
		private compressor:ICompressor,
		private logger:ILogger
	){}
	//---
	uploadImage(filePath:string){
		const compressed = this.compressor.compress(filePath)
		this.uploader.upload(compressed)
		this.logger.log(`File ${filePath} upload successfully.`)
	}
}