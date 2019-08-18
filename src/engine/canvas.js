class Canvas {
    constructor() {
        this.element = document.getElementById('game');
        this.ctx = this.element.getContext('2d');
        this.width = this.element.width;
        this.heigh = this.element.heigh;

        // Clear at the beginning required for HMR support.
        this.clear();
    }

    clear() {
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.element.width, this.element.height);
        this.ctx.restore();
    }
}

export default Canvas;
