class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.button2 = createButton("Reset");
      //this.button3 = createButton("opponent team");
      //this.button4 = createButton("good side team");
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("NBA 12 Ultra");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.button2.position(displayWidth - 100, 30);
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        //player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        this.greeting.hide();
        //this.button2.position(displayWidth/2 - 80, displayHeight/4);
        //this.button3.position(1000, 1000);
      });
      this.button2.mousePressed(()=>{
       player.updateCount(0);
       game.update(0);
      })
    }
  }
  