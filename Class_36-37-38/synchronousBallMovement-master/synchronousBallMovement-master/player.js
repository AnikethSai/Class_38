class Player {
constructor(){
this.name = null;
this.distance = 0;
this.index = null;

}

getCount(){
    var pcref = database.ref("playercount")
    pcref.on("value",function(data){
        playercount = data.val()
    })
}

 updateCount(count){
database.ref("/").update({
    playercount : count
})
}

update(){
    var playerIndex = "Player" + this.index;
    database.ref(playerIndex).set({
        name : this.name,
        distance : this.distance
    })
}
static  allPlayersInfo(){
var playerInfo = database.ref("player")
playerInfo.on("value",(data)=>{
    allplayers = data.val()
})


}
}

