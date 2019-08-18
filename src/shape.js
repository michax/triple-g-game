class Shape {
    constructor(canvas) {
        this.ctx = canvas.ctx;
    }

    drawTest() {
        const ctx = this.ctx;

        ctx.fillStyle = 'rgb(200, 150, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);

        ctx.beginPath();
        ctx.arc(100, 100, 50, 0, Math.PI / 2);
        ctx.stroke();
    }
}

export default Shape;
