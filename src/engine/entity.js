var uniqueId = 0;

class Entity {
    constructor(id = null) {
        this.game = window.$game;
        this.canvas = this.game.canvas;
        this.shape = this.game.shape;

        if (id === null) {
            this.id = `g_${uniqueId++}`;
        } else {
            this.id = id;
        }
    }

    onAdded(scene) {}

    onRemoved(scene) {}

    onUpdate(dt, time) {}
}

export default Entity;
