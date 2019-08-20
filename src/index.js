import Game from './engine/game';
import Scene from './engine/scene';
import PlayerEntity from './game/entities/playerEntity';
import FontEntity from './engine/font';

const game = new Game();

// [Setup Scene]
const scene = new Scene();

const playerEntity = new PlayerEntity();
const taskTextUI = new FontEntity();
taskTextUI.x = 5;
taskTextUI.y = 5;
taskTextUI.print('task:create japan flag!');

window.$taskText = taskTextUI;

scene.addEntities([taskTextUI, playerEntity]);

// [Set Scene]
game.setScene(scene);

// [Run The Game!]
game.run();
