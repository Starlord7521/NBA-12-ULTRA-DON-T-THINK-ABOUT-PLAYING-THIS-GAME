class Player {
    constructor(){
      this.index = null;
      this.name = null;
      this.rank = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "my_team/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('my_team');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
    getCarsAtEnd(){
    var rank = database.ref('carsAtEnd');
   rank.on("value", (data)=>{
     this.rank = data.val();
   })
    }
    static updateCarsAtEnd(rankings){
     database.ref('/').update({
       carsAtEnd: rankings
     }) 
    }
  }
  