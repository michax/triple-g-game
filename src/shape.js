class Shape {
    constructor() {
        this.ctx = document.getElementById('game').getContext('2d');
    }

    drawGrid() {
        this.ctx.fillStyle = 'rgb(200, 150, 0)';
        this.ctx.fillRect(10, 10, 50, 50);

        this.ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        this.ctx.fillRect(30, 30, 50, 50);
    }
}

export default Shape;
