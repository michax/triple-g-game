class Shape {
    constructor(ctx) {
        this.c = ctx;
    }

    drawBoxFill(x, y, width, height, fillStyle) {
        if (fillStyle) {
            this.c.fillStyle = fillStyle;
        }

        this.c.fillRect(x, y, width, height);
    }

    drawCircleStroke(x, y, radius, strokeStyle) {
        if (strokeStyle) {
            this.c.strokeStyle = strokeStyle;
        }

        this.c.beginPath();
        this.c.arc(x, y, radius, 0, Math.PI * 2);
        this.c.stroke();
    }

    drawCircleFill(x, y, radius, fillStyle) {
        if (fillStyle) {
            this.c.fillStyle = fillStyle;
        }

        this.c.beginPath();
        this.c.arc(x, y, radius, 0, Math.PI * 2);
        this.c.fill();
    }

    drawTest() {
        this.c.fillStyle = 'rgb(120, 200, 0)';
        this.c.fillRect(10, 10, 50, 50);

        this.c.fillStyle = 'rgba(50, 0, 200, 0.5)';
        this.c.fillRect(70, 10, 50, 50);

        this.c.fillStyle = 'rgba(0, 50, 200, 0.5)';
        this.c.fillRect(130, 10, 50, 50);

        this.c.strokeStyle = 'rgba(50, 0, 200, 0.5)';
        this.c.beginPath();
        this.c.arc(130, 10, 50, 0, Math.PI / 2);
        this.c.stroke();
    }
}

export default Shape;
