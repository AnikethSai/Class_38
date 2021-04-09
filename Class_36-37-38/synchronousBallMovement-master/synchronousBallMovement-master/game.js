class Game{
    constructor(){
        
    }

    getState(){
    var gsref = database.ref("gamestate")
    gsref.on("value",function(data){
   gamestate = data.val()
    })
    }
    update(state){
        database.ref("/").update({
            gamestate : state
        })
    }
    async start(){
        if(gamestate === 0){
            player = new Player();
            var pcref = await database.ref("playercount").once("value")
            if (pcref.exists()){
               playercount = pcref.val()
               player.getCount()
            } 
            
            form = new Form()
            form.display()
        }
        c1 = createSprite(500,500,10,10);
        c2 = createSprite(550,500,10,10);
        c3 = createSprite(600,500,10,10);
        c4 = createSprite(650,500,10,10);

        car  = [c1,c2,c3,c4];
    }
    play(){
    form.hide();
    //text("Game here",200,200)
    Player.allPlayersInfo()
    if(allplayers !== undefined){
        var index = 0;
        var x = 0;
        var y ;

       // var displayPosition = 100
        for(var plr in allplayers  ){
         /*   if(plr === "player" + player.index){
                fill("red");

            }
            else{
                fill("black");
            } 
            diplayPosition += 20;   
            text(allplayers[plr].name + ": " + allplayers[plr].distance,120,displayPosition)    */
            index += 1;
            x += 200;
            y = displayHeight - allplayers[plr].distance;
            car[index - 1].x = x;
            car[index - 1].y = y;
            if(index === player.index){
                car[index - 1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = car[index - 1].y;
            }
        }
    }
    
    if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance += 50;
    player.update()
    }
    drawSprites();
}

}
