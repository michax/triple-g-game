class Scene {
    constructor() {
        this.list = [];
        this.map = {};
    }

    clear() {
        this.list.forEach(entity => {
            entity.onRemoved(entity);
        });
        this.list = [];
        this.map = {};
    }

    addEntities(entities) {
        entities.forEach(this.addEntity.bind(this));
    }

    addEntity(entity) {
        this.list.push(entity);
        this.map[entity.id] = entity;
        entity.onAdded(this);
    }

    removeEntityById(id) {
        const entityToRemove = this.map[id];
        this.removeEntity(entityToRemove);
    }

    removeEntity(entity) {
        entity.onRemoved(this);
        const index = this.list.indexOf(entity);
        this.list.splice(index, 1);
        delete this.map[entity.id];
    }

    onUpdate(dt, time) {
        this.list.forEach(entity => {
            entity.onUpdate(dt, time);
        });
    }
}

export default Scene;
