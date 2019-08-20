import Canvas from './canvas';

export const STATE_RUNNING = 'r';
export const STATE_IDLE = 'i';

class Game {
    constructor() {
        this.scale = 4;
        window.$game = this;
        this.canvas = new Canvas(this.scale);

        // [Properties]

        // Last Time
        this.lt = 0;
        // Delta Time
        this.dt = 0;
        this.state = STATE_IDLE;
        this.scene = null;

        // [Handlers]
        this.onUpdate = this.onUpdate.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);

        // [Setup Global Event Listeners]
        window.addEventListener('keyup', this.onKeyDown);
    }

    // [Lifecycle methods]

    run() {
        if (this.state === STATE_RUNNING) {
            return;
        }

        this.state = STATE_RUNNING;
        window.requestAnimationFrame(this.onUpdate);
    }

    stop() {
        this.state = STATE_IDLE;
    }

    // [Properties]

    setScene(scene) {
        this.scene = scene;
    }

    // [Handlers]

    onKeyDown(ev) {
        if (ev.code === 'KeyP') {
            if (this.state === STATE_IDLE) {
                this.run();
            } else {
                this.stop();
            }
        }
    }

    onUpdate(t) {
        if (this.state !== STATE_RUNNING) {
            return;
        }

        this.dt = t - this.lt;
        this.lt = t;

        this.canvas.clear();

        if (this.scene) {
            this.scene.onUpdate(this.dt, this.lt);
        }

        window.requestAnimationFrame(this.onUpdate);
    }
}

export default Game;
