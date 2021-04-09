var canvas;
var gamestate = 0;
var playercount;
var database;
var player,form;
var game;
var allplayers;
var c1,c2,c3,c4;
var c1i,c2i,c3i,c4i;
var car;

function setup(){
canvas = createCanvas(displayWidth,displayHeight);
database = firebase.database();
game = new Game();
game.getState();
game.start();

}

function draw(){
  background("pink")

if(playercount === 4 ){
  game.update(1)

}

if(gamestate === 1 ){
  clear()
  game.play();
}

}

