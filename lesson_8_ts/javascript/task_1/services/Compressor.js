export default class Compressor {
    compress(path) {
        console.log(`Compressing image: ${path}`);
        return `compressed_${path}`;
    }
}
