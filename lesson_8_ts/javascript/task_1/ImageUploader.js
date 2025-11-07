export default class ImageUploader {
    constructor(uploader, compressor, logger) {
        this.uploader = uploader;
        this.compressor = compressor;
        this.logger = logger;
    }
    //---
    uploadImage(filePath) {
        const compressed = this.compressor.compress(filePath);
        this.uploader.upload(compressed);
        this.logger.log(`File ${filePath} upload successfully.`);
    }
}
