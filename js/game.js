class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    

    createSpaceship() {
        if (World.frameCount % 150 == 0) {
        var spaceship = createSprite(Math.round(random(50, width-50),100, 10, 10));
        spaceship.addImage(spaceship_img);
        spaceship.scale=0.04;
        spaceship.velocityX = 3;
        spaceship.lifetime = 200;
        }
      }
    
        createTelescope() {
        if (World.frameCount % 100 == 0) {
        var telescope = createSprite(Math.round(random(50, width-50),100, 10, 10));
        telescope.addImage(telescopes_img);
        telescope.scale=0.04;
        telescope.velocityX = 3;
        telescope.lifetime = 150;
        }
      }
    
        createMeteor() {
        if (World.frameCount % 120 == 0) {
        var meteor = createSprite(Math.round(random(50, width-50),100,10,10));
        meteor.addImage(meteor_img);
        meteor.scale=0.1;
        meteor.velocityX = 3;
        meteor.lifetime = 150;
        }
      }

    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
        
    
    
    player1 = createSprite(displayWidth-100,160,40,40);
    player1.addImage(astro1_img)
    player1.scale=0.2
    player2 = createSprite(100,180,40,40);
    player2.addImage(astro2_img)
    player2.scale=0.2

    spaceship1=createSprite(100,275,100,10);
    spaceship1.addImage(spaceship_img);
    spaceship1.scale=0.05;
    spaceship2=createSprite(displayWidth-100,260,100,10);
    spaceship2.addImage(spaceship_img);
    spaceship2.scale=0.05;
    
}

    play(){
    
    form.hide()
    Player.getPlayerInfo()
    if (allPlayers !== undefined) {
    var x1=displayWidth-100
    var y1=200
    var x2=100
    var y2=200
    //writePosition(x1,y1);
    //writePosition(x2,y2);
    background(back_img2);
    earth=createSprite(100,displayHeight-100,40,50);
    earth.addImage(earth_img);
    earth.scale=0.3
    this.createSpaceship()
    this.createTelescope()
    this.createMeteor()
      //if(meteor.isTouching(player1 && player2)){
        //explosionSound.play();
        //}

        //if(telescope.isTouching(player1 && player2)){
            //pointSound.play();
        //}
    drawSprites();
    }
  }

}
  
   
//   updatePosition(){
//     if(keyDown(LEFT_ARROW)){
//         writePosition(-10,0);
//     }
//     else if(keyDown(RIGHT_ARROW)){
//         writePosition(10,0);
//     }
//     else if(keyDown(UP_ARROW)){
//         writePosition(0,-10);
//     }
//     else if(keyDown(DOWN_ARROW)){
//         writePosition(0,+10);
//     }
//   }
//    writePosition(x,y){
//     //ball.x = ball.x + x;
//     //ball.y = ball.y + y;

//     database.ref("players/"+player.index).set({
//         xPosition:xPosition+x,
//         yPosition:yPosition+y,    
//     })
//    }
//     readPosition(data){
//     var position = data.val()
//     }

//add astro deatails  to database which will have x and y posistions
//fix the big objects
//move "if is" conditions to play function
//modify write and read funsction based on player deatails

    


// }
