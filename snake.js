class Snake {

  constructor() {
    this.body = [
      {x: 100, y: 280},
      {x: 80, y: 280},
      {x: 60, y: 280},
    ];
    this.xspeed = 1;
    this.yspeed = 0;

    this.bodyDefault = JSON.parse(JSON.stringify(this.body));
    this.xspeedDefault = this.xspeed;
    this.yspeedDefault = this.yspeed;
  }
  
  update() {    
    for(var i = this.body.length-1; i > 0; i--) {
      this.body[i] = {...this.body[i-1]};
    }
    this.body[0].x = this.body[0].x + this.xspeed*scl;
    this.body[0].y = this.body[0].y + this.yspeed*scl;

  }

  show() {
    fill(0, 255, 0);

    for(var i = 0; i < this.body.length; i++) {
      if(i == this.body.length-1) {

        if(this.body[i-1].y < this.body[i].y) {
          triangle(this.body[i].x+0.5*scl, this.body[i].y+scl, this.body[i].x, this.body[i].y, this.body[i].x+scl, this.body[i].y);
        } else if (this.body[i-1].y > this.body[i].y) {
          triangle(this.body[i].x+0.5*scl, this.body[i].y, this.body[i].x, this.body[i].y+scl, this.body[i].x+scl, this.body[i].y+scl);
        } else if (this.body[i-1].x > this.body[i].x) {
          triangle(this.body[i].x+scl, this.body[i].y, this.body[i].x+scl, this.body[i].y+scl, this.body[i].x, this.body[i].y+0.5*scl);
        } else if (this.body[i-1].x < this.body[i].x) {
          triangle(this.body[i].x, this.body[i].y, this.body[i].x+scl, this.body[i].y+0.5*scl, this.body[i].x, this.body[i].y+scl);
        }

      } else {
        rect(this.body[i].x, this.body[i].y, scl, scl)
        fill(0, 0, 255);
        if(i == 0) {
          if(this.xspeed == 0 && this.yspeed == -1) {
            circle(this.body[i].x+0.5*scl, this.body[i].y+0.25*scl, 5);
            circle(this.body[i].x+0.5*scl, this.body[i].y+0.75*scl, 5);
          } else if(this.xspeed == 0 && this.yspeed == 1) {
            circle(this.body[i].x+0.5*scl, this.body[i].y+0.25*scl, 5);
            circle(this.body[i].x+0.5*scl, this.body[i].y+0.75*scl, 5);
          } else if(this.xspeed == 1 && this.yspeed == 0) {
            circle(this.body[i].x+0.25*scl, this.body[i].y+0.5*scl, 5);
            circle(this.body[i].x+0.75*scl, this.body[i].y+0.5*scl, 5);
          } else if(this.xspeed == -1 && this.yspeed == 0) {
            circle(this.body[i].x+0.25*scl, this.body[i].y+0.5*scl, 5);
            circle(this.body[i].x+0.75*scl, this.body[i].y+0.5*scl, 5);
          }
        }
        fill(0, 255, 0);
      }
    }
  }

  death() {
    if(this.body[0].x > width-scl || 
      this.body[0].x < 0 || 
      this.body[0].y > height-scl || 
      this.body[0].y < 0) {
        this.reset();
    }

    // find if snake body intersection
    for(var i = 1; i < this.body.length; i++) {
      if(this.body[0].x == this.body[i].x && this.body[0].y == this.body[i].y) {
        this.reset();
      }
    }
  }

  reset() {
    isStarted = false;
    food.pickLocation();
    this.body = JSON.parse(JSON.stringify(this.bodyDefault));
    this.xspeed = this.xspeedDefault;
    this.yspeed = this.yspeedDefault;
    score = 0;
  }

  dir(x, y) {
    if((this.xspeed != 0 && this.xspeed+x != 0) || (this.yspeed != 0 && this.yspeed+y != 0)) {
      this.xspeed = x;
      this.yspeed = y;
    }
  }

  eat(pos) {
    if(this.body[0].x == pos.x && this.body[0].y == pos.y) {
      this.body.push({...this.body[this.body.length-1]});
      return true;
    } else {
      return false;
    }
  }

  getBody() {
    return this.body;
  }
}