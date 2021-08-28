class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        background(back_img)
        this.title.html("Race to Earth");
        this.title.position(displayWidth/2-200,10);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(displayWidth/2-100,500);
        this.input.style('width', '200px');
        this.input.style('height', '35px');
        this.input.style('background', 'lavender');
        this.button.position(displayWidth/2-100,600);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'skyblue');
        this.reset.position(40, 30);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(780,500);
            this.greeting.style('color', 'maroon');
            this.greeting.style('font-size', '70px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            var playerInfoRef = database.ref('players'); 
            playerInfoRef.remove();
        });

    }
}