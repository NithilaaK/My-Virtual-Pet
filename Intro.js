class Intro {
    constructor() {
        this.petNameInput = createInput("Name");
        this.playButton = createButton("Play");
        this.title = createElement("h1");
        this.label1 = createElement("h2");
    }
    
    hide(){
        this.playButton.hide();
        this.title.hide();
        this.petNameInput.hide();
        this.label1.hide();
    }
        
    display(){
        this.title.style("font-family", "Georgia, Times, serif");
        this.title.style("color", "rgb(30, 144, 255)");
        this.title.html("My Virtual Pet");
        this.title.position(windowWidth / 12, windowHeight - 500);  

        this.playButton.position(windowWidth / 2.25 , 373);

        this.label1.html("Your Pet's Name");
        this.label1.position(46, 140);
         
        this.petNameInput.position(46, 193);        

        this.playButton.mousePressed(() => {
            pet.updateName(this.petNameInput.value());
            gameState = 1;
        })
    }
}