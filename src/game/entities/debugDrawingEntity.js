import Entity from '../../engine/entity';

class DebugDrawingEntity extends Entity {
    onUpdate(dt, time) {
        super.onUpdate(dt, time);
        this.shape.drawTest();
    }
}

export default DebugDrawingEntity;
