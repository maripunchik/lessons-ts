import IRenderer from "../IRenderer.js";

export default class PDFRenderer implements IRenderer{
	render(content: string) {
	 console.log(`[PDF]${content}`);
  }
}