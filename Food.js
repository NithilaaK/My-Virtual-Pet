class Food {
    constructor() {
        this.cake = createButton("🍰");
        this.salad = createButton("🥗");
        this.chilli = createButton("🌶");
    }

    hide() {
        this.cake.hide();
        this.salad.hide();
        this.chilli.hide();
    }

    display() {
        this.cake.show();
        this.salad.show();
        this.chilli.show();

        this.cake.position(windowWidth - 80, 75);
        this.salad.position(windowWidth - 80, 175);
        this.chilli.position(windowWidth - 80, 275);

        this.cake.size(50, 50);
        this.salad.size(50, 50);  
        this.chilli.size(50, 50); 

        this.cake.style("font-size", "23px");
        this.salad.style("font-size", "23px");
        this.chilli.style("font-size", "23px");

        this.cake.style("border-radius", "23px");
        this.salad.style("border-radius", "23px");
        this.chilli.style("border-radius", "23px");

        this.cake.style("outline", "none");
        this.salad.style("outline", "none");
        this.chilli.style("outline", "none");

        this.cake.mousePressed(() => {
            pet.updateImage("images/giga_eats_cake.png");
        });

        this.salad.mousePressed(() => {
            pet.updateImage("images/giga_eats_salad.png");
        });

        this.chilli.mousePressed(() => {
            pet.updateImage("images/giga_eats_chilli.png");
        });
    }
}
