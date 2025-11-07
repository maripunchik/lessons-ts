
import IRenderer from "../IRenderer.js";

export default class HTMLTemplateRenderer implements IRenderer{
	render(content: string) {
    console.log(`<html>${content}</html>`);
  }
}