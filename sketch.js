var courtimg;
var circle1, circle2, circle3, circle4;
var myteam, opponentteam;
var circle1img, circle2img, circle3img, circle4img;
var ballimg, ball;
var inv1, inv2, inv3, inv4;
var database;
var gameState = 0;
var playerCount, player, game, form;
function preload(){
 courtimg = loadImage("images/court.jpg");
 circle1img = loadImage("images/walluigi.png");
 circle2img = loadImage("images/lebron james.png");
 circle3img = loadImage("images/KD.png");
 circle4img = loadImage("images/wario.png");
 ballimg = loadImage("images/Basketball.png");
}
function setup() {
  createCanvas(displayWidth - 100, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function draw() {
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    /*this.button3 = createButton("opponent team");
    this.button4 = createButton("good side team");
    this.button3.position(displayWidth/2 - 80, displayHeight/4);
    this.button4.position(1000, 1000);
    if(this.button4.mousePressed()){
      var playerIndex = "team/my_team/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
      });
      this.index = 0;
      console.log("my team");
    }
    if(this.button3.mousePressed()){
      var playerIndex = "team/opponent_team/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
      });
      this.index = 0;
      console.log("opponent team");
    }*/
  }
  if(gameState === 2){
    game.update(2);
  }
}