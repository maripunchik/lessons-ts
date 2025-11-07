
import ICompressor from "../interfaces/ICompressor.js";

export default class Compressor implements ICompressor{
	compress(path: string): string {
		console.log(`Compressing image: ${path}`);
      return `compressed_${path}`;
	}
}