var uniqueId = 0;

class Entity {
    constructor(id) {
        this.game = window.$game;
        this.canvas = this.game.canvas;
        this.shape = this.game.shape;

        if (typeof id === 'undefined' || id === null) {
            this.id = `guid_${uniqueId++}`;
        } else {
            this.id = id;
        }
    }

    onAdded(scene) {}

    onRemoved(scene) {}

    onUpdate(dt, time) {}
}

export default Entity;
