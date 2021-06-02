class Game {
  constructor(){}

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
      player = new Player();
      var oc = await database.ref('playerCount').once("value");
      if(pc.exists()){
        playerCount = pc.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }
    
    // add sprites for car1,car2,car3 and car4
    
    // assign to an array cars
  }

  play(){
    form.hide();
   
    Player.getPlayerInfo();

    // if allPlayers is not equal to undefined
    
    // set values for x, y, index
    
    
    //use for loop to write code for each player
    
        //position cars 
    
        //use game camera
    
    
    
    // when up arrow key is pressed, increase player distance and update in rtdb
    
  }
}
