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

    drawBoxFill(x, y, width, height, fillStyle) {
        if (fillStyle) {
            this.ctx.fillStyle = fillStyle;
        }

        this.ctx.fillRect(x, y, width, height);
    }

    drawCircleStroke(x, y, radius, strokeStyle) {
        if (strokeStyle) {
            this.ctx.strokeStyle = strokeStyle;
        }

        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.stroke();
    }

    drawCircleFill(x, y, radius, fillStyle) {
        if (fillStyle) {
            this.ctx.fillStyle = fillStyle;
        }

        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fill();
    }

    drawTest() {
        this.ctx.fillStyle = 'rgb(120, 200, 0)';
        this.ctx.fillRect(10, 10, 50, 50);

        this.ctx.fillStyle = 'rgba(50, 0, 200, 0.5)';
        this.ctx.fillRect(70, 10, 50, 50);

        this.ctx.fillStyle = 'rgba(0, 50, 200, 0.5)';
        this.ctx.fillRect(130, 10, 50, 50);

        this.ctx.strokeStyle = 'rgba(50, 0, 200, 0.5)';
        this.ctx.beginPath();
        this.ctx.arc(130, 10, 50, 0, Math.PI / 2);
        this.ctx.stroke();
    }
}

export default Canvas;
