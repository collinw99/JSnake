class Food {

    constructor() {
        this.pos = {}
        this.pickLocation();
    }

    show() {
        fill(255, 0, 0);
        circle(this.pos.x+0.5*scl, this.pos.y+0.5*scl, scl);
    }

    getPos() {
        return this.pos;
    }

    pickLocation() {
        var cols = floor(width/scl);
        var rows = floor(height/scl);
        var snakeBody = s.getBody();
        var hasGoodPos = false;
        while(!hasGoodPos) {
            var newPos = createVector(floor(random(cols)), floor(random(rows)));
            newPos.mult(scl);
            var isGood = true;
            for(var i = 0; i < snakeBody.length; i++) {
                if(newPos.x == snakeBody[i].x && newPos.y == snakeBody[i].y) {
                    isGood = false;
                }
            }
            if(isGood) {
                this.pos = {...newPos};
                hasGoodPos = true;
            }
        }
    }


}