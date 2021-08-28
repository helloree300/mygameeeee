var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var spaceship;
var earth
var player, form,game;
var player1,player2,players
var background;
var player1score;
var player2score;
var spaceship1;
var spaceship2;


function preload(){
  astro1_img=loadImage("images/astro1.png");
  astro2_img=loadImage("images/astro2.png");
  back_img = loadImage("images/background.jpg");
  back_img2 = loadImage("images/background2.JPEG");
  earth_img=loadImage("images/earth.PNG");
  meteor_img=loadImage("images/meteor.PNG");
  spaceship_img=loadImage("images/spaceship.PNG");
  telescopes_img=loadImage("images/telescopes.PNG");
  spaceSound = loadSound("sounds/space.mp3");
  pointSound = loadSound("sounds/point.mp3")
  exploSound = loadSound("sounds/explosion.mp3")
  checkSound = loadSound("sounds/checkPoint.mp3")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  //spaceSound.play
  
}

function draw() {
  //background(back_img);
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}


