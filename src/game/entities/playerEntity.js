import Entity from '../../engine/entity';
import * as Math from '../../engine/math';

function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}

class PlayerEntity extends Entity {
    onAdded(scene) {
        super.onAdded(scene);

        this.mouseX = 0;
        this.mouseY = 0;
        this.x = 0;
        this.y = 0;

        this.pull = 0.08;

        this.canvas.element.addEventListener(
            'mousemove',
            this.onMouseMove.bind(this)
        );
    }

    onMouseMove(ev) {
        this.mouseX = ev.clientX;
        this.mouseY = ev.clientY;
    }

    onRemoved(scene) {
        super.onRemoved(scene);
    }

    onUpdate(dt, time) {
        super.onUpdate(dt, time);

        const lerpX = Math.lerp(this.x, this.mouseX, this.pull);
        const lerpY = Math.lerp(this.y, this.mouseY, this.pull);

        this.shape.drawCircleFill(lerpX, lerpY, 50, 'rgb(200, 0, 0)');

        this.x = lerpX;
        this.y = lerpY;
    }
}

export default PlayerEntity;
