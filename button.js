class Button {
    constructor(text, centerX, centerY, w, h) {
        this.text = text;
        this.center = {x: centerX, y: centerY};
        this.origin = {x: centerX-0.5*w, y: centerY-0.5*h};
        this.w = w;
        this.h = h;
        this.fontSize = 50
    }

    show() {
        fill(255, 255, 255);
        rect(this.origin.x, this.origin.y, this.w, this.h);
        text('Click or press any key to start', this.origin.x+9, this.origin.y+this.h+15);
        fill(0, 0, 0);
        textSize(this.fontSize);
        text(this.text, this.origin.x+15, this.origin.y+this.h-15);
        textSize(13);
    }

    mousePressed() {
        if(mouseX > this.origin.x && mouseX < this.origin.x+this.w &&
        mouseY > this.origin.y && mouseY < this.origin.y+this.h) {
            isStarted = true; 
        }
    }

    keyPressed() {
        isStarted = true;
    }
}