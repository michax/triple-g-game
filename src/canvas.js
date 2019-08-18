class Canvas {
    constructor() {
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');

        // Clear during launch required for HMR support.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export default Canvas;
