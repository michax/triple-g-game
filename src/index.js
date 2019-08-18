import Game from './engine/game';
import Scene from './engine/scene';
import DebugDrawingEntity from './game/entities/debugDrawingEntity';
import PlayerEntity from './game/entities/playerEntity';

const game = new Game();
window.$game = game;

// [Setup Scene]
const scene = new Scene();

const debugDrawingEntity = new DebugDrawingEntity();
const playerEntity = new PlayerEntity();

scene.addEntities([debugDrawingEntity, playerEntity]);

// [Set Scene]
game.setScene(scene);

// [Run The Game!]
game.run();
