import Entity from '../../engine/entity';

class DebugDrawingEntity extends Entity {
    onUpdate(dt, time) {
        super.onUpdate(dt, time);
        this.canvas.drawTest();
    }
}

export default DebugDrawingEntity;
