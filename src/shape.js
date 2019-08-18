class Shape {
    super() {
        let canvas = document.getElementById('game');

        if (!canvas.getContext) {
            return;
        }

        this.ctx = canvas.getContext('2d');
    }

    drawGrid(ctx) {
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
    }
}

export default Shape;
