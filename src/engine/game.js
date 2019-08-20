import Canvas from './canvas';

export const STATE_RUNNING = 'r';
export const STATE_IDLE = 'i';

class Game {
    constructor() {
        console.log('===== ANI PIXEL ENGINE v1.2.56 build: af3ad =====');
        console.log('. . . . . . . . . . . . . . . . . . . . . . . . . ');
        console.log('                                                   ');
        console.log('[1/7] Intializing AniPixel Game Engine...');
        console.log('[2/7] Baking global illumination...');
        console.log('[3/7] Global illumination baking completed in 150ms');
        console.log('[4/7] Testing Temporal Anti Aliasing...');
        console.log('[5/7] Temporal Anti Aliasing Enabled with 2x sampling.');
        console.log(
            '[6/7] Setting up MMORPG instance number: ',
            Math.round(Math.random() * 1000)
        );
        console.log(
            '[7/7] Initialization completed in 300 ms. Enjoy GGG experience!'
        );

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
