export default class PageRenderer {
    constructor(renderer) {
        this.renderer = renderer;
    }
    //---
    showPage(text) {
        this.renderer.render(text);
    }
}
