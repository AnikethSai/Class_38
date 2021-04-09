class Form{
    constructor(){
this.input = createInput(" ");
this.button = createButton("Play!");
this.greet = createElement("h3");
}
hide(){
    this.input.hide()
    this.button.hide()
    this.greet.hide()
}
    display(){
        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(displayWidth/2 - 50,10);
       
       
        this.input.position(displayWidth/2 - 50,100)

        
        this.button.position(displayWidth/2 ,150);

        
        
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name  = this.input.value();
            playercount +=1 ;
            player.index = playercount;
            player.update()
            player.updateCount(playercount)
            this.greet.html("Hello " + player.name)
            this.greet.position(displayWidth/2 - 50,100);
        })

        
    }

}
