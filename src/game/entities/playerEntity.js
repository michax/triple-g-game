import Entity from '../../engine/entity';
import * as GameMath from '../../engine/math';

class PlayerEntity extends Entity {
    onAdded(scene) {
        this.imgCircle = document.getElementById('r-circle');
        super.onAdded(scene);

        this.mouseX = 0;
        this.mouseY = 0;
        this.x = 0;
        this.y = 0;

        this.pull = 0.08;

        this.onMouseMove = this.onMouseMove.bind(this);
        this.canvas.element.addEventListener('mousemove', this.onMouseMove);
    }

    onMouseMove(ev) {
        this.mouseX = ev.offsetX;
        this.mouseY = ev.offsetY;

        const min = 230;
        const max = 290;

        if (
            this.mouseX > min &&
            this.mouseX < max &&
            this.mouseY > min &&
            this.mouseX < max
        ) {
            $taskText.print('japan flag created!');
        } else {
            $taskText.print('task:create japan flag!');
        }
    }

    onRemoved(scene) {
        super.onRemoved(scene);
    }

    onUpdate(dt, time) {
        super.onUpdate(dt, time);

        const lerpX = GameMath.lerp(
            this.x,
            this.mouseX / this.game.scale,
            this.pull
        );
        const lerpY = GameMath.lerp(
            this.y,
            this.mouseY / this.game.scale,
            this.pull
        );

        this.scale = 2;

        this.canvas.ctx.drawImage(
            this.imgCircle,
            0,
            0,
            this.imgCircle.width,
            this.imgCircle.height,
            lerpX - (this.imgCircle.width / 2) * this.scale,
            lerpY - (this.imgCircle.height / 2) * this.scale,
            this.imgCircle.width * this.scale,
            this.imgCircle.height * this.scale
        );

        this.x = lerpX;
        this.y = lerpY;
    }
}

export default PlayerEntity;
