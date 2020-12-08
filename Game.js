class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        this.button3 = createButton("opponent team");
        this.button4 = createButton("good side team");
        this.button3.position(displayWidth/2 - 80, displayHeight/4);
        this.button4.position(1000, 1000);
        if(this.button4.mousePressed()){
          form = new Form()
        form.display();
        var playerIndex = "team/my_team/player" + this.index;
        database.ref(playerIndex).set({
        name:this.name,
        });
        console.log("my team");
        }
        if(this.button3.mousePressed()){
          form = new Form()
          form.display();
        var playerIndex = "team/opponent_team/player" + this.index;
        database.ref(playerIndex).set({
        name:this.name,
        });
        console.log("opponent team");
        }
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        }
        circle1 = createSprite(displayWidth/2 - 300, displayHeight/2 - 200, 10, 10);
        circle1.addImage("circle1", circle1img);
        circle1.scale = 0.1;
        circle2 = createSprite(displayWidth/2 + 250, displayHeight/2 - 200, 10, 10);
        circle2.addImage("circle2", circle1img);
        circle2.scale = 0.1;
        circle3 = createSprite(displayWidth/2 - 300, displayHeight/2 + 200, 10, 10);
        circle3.addImage("circle3", circle2img);
        circle3.scale = 0.1;
        circle4 = createSprite(displayWidth/2 + 250, displayHeight/2 + 200, 10, 10);
        circle4.addImage("circle4", circle3img);
        circle4.scale = 0.1;
        ball = createSprite(displayWidth/2 - 50, displayHeight/2 - 30, 10, 10);
        ball.addImage("ball", ballimg);
        ball.scale = 0.1;
        inv1 = createSprite(1105, 380, 10, displayHeight-100);
        inv1.shapeColor = "blue";
        inv1.visible = false;
        inv2 = createSprite(159, 380, 10, displayHeight-100);
        inv2.shapeColor = "green";
        inv2.visible = false;
        inv3 = createSprite(639, 723, displayWidth-400, 9);
        inv3.shapeColor = "green";
        inv3.visible = false; 
        inv4 = createSprite(639, 49, displayWidth-400, 9);
        inv4.shapeColor = "green";
        inv4.visible = false;
      }
  
    play(){
      form.hide();
      background(courtimg);
      if(keyDown("w")){
        circle3.y-=10;
      }
      if(keyDown("s")){
        circle3.y+=10;
      }
      if(keyDown("d")){
        circle3.x+=10;
      }
      if(keyDown("a")){
        circle3.x-=10;
      }
      if(keyDown("up")){
        circle4.y-=10;
      }
      if(keyDown("down")){
        circle4.y+=10;
      }
      if(keyDown("left")){
        circle4.x-=10;
      }
      if(keyDown("right")){
        circle4.x+=10;
      }
      if(ball.isTouching(circle1)||ball.isTouching(circle2)||ball.isTouching(circle3)||ball.isTouching(circle4)){
        ball.x = mouseX;
        ball.y = mouseY;
        ball.velocityX = 10;
        ball.velocityY = 10;
      }
      ball.bounceOff(inv1);
      ball.bounceOff(inv2);
      ball.bounceOff(inv3);
      ball.bounceOff(inv4);
      drawSprites();
    }
    end(){
      console.log("YOU HAVE LOST THE GAME!!!!!!!!!!!!");
    }
  }
  