import Entity from './entity';
import { timingSafeEqual } from 'crypto';

class Font extends Entity {
    constructor(id) {
        super(id);
        this.img = document.getElementById('r-font');
        const width = 128;
        const height = 85;
        this.x = 0;
        this.y = 0;

        this.size = 8;

        // Vertical Gap
        this.vGap = 3;

        // Horizontal Gap
        this.hGap = 3;

        this.columns = Math.floor(width / this.size);
        this.rows = Math.floor(height / this.size);

        this.fillStyle = '#000000';
        this.text = null;
    }

    print(text) {
        this.text = text;
    }

    posFromIndex(index) {
        return [
            Math.floor(index % this.columns) * this.size,
            Math.floor(index / this.columns) * this.size,
        ];
    }

    renderText(text, sx, sy, fillStyle) {
        text.split('').forEach((char, i) => {
            const pos = this.posFromIndex(char.charCodeAt(0));
            this.canvas.drawFont(
                this.img,
                pos[0],
                pos[1],
                this.size,
                this.size,
                sx + i * (this.size - this.hGap),
                sy,
                this.size,
                this.size,
                fillStyle
            );
        });
    }

    onUpdate(dt, time) {
        if (!this.img || !this.img.complete) {
            return;
        }

        if (this.text) {
            this.renderText(this.text, this.x, this.y, this.fillStyle);
        }
    }
}

export default Font;
