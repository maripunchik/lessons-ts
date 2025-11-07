import IRenderer from "../IRenderer.js";

export default class MarkdownRenderer implements IRenderer{
	render(content: string) {
	 console.log(`**${content}**`);
  }
}