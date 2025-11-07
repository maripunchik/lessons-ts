
import IRenderer from "./IRenderer.js";

export default class PageRenderer {
	constructor(private renderer: IRenderer){}
	//---
	 showPage(text: string) {
    this.renderer.render(text);
  }
}

