class Food {
    constructor() {
        this.foodStock=0;
        this.lastFed;
        this.image =loadImage("Milk.png");
    }
    updateFoodStock(foodStock){
        this.foodStock= foodStock;
    }
    getFedTime(lastFed){
        this.lastFed = lastFed;
    }
    deductFood(){
        if (this.foodStock>0){
            this.foodStock-= 1;
        }
    }
    getfoodStock(){
        return this.foodStock;
    }
    display(){
        background(40,200,50);
        fill (255);
        textSize(15);
        if(lastFed>12){
            text("last fed at :" + lastFed % 12+ "pm",50,30 );
        }else if(lastFed == 0){
            text("last fed at : 12 am" ,50,30 );
        }else {
            text("last fed at :" + lastFed + "am",50,30 );
        }
        var x = 70,y= 100;
        imageMode (CENTER);
        if (this.foodStock != 0){
            for (var i = 0 ; i < this.foodStock; i++){
                if (i% 10== 0){
                    x = 70;
                    y += 50
                }
                image (this.image,x,y,30,50);
                x = x+30
            }
        }
    }
}