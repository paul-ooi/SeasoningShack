function Catcher(p_fieldWidth) {
  var self = this;
  var mouseX;
  var catcherX = p_fieldWidth/2; // For JS. Initial value of the catcher = Centre of the field
  htmlCatcher.style.left = catcherX - this.width/2 + 'px'; // For CSS. Place img on the centre of the field

  // this.image = "/img/catcher.png"; // img url. necessary??
  this.width = 80;
  this.height = 30;
  this.speed = 250; // moving speed (move 250px/sec)

  // Detect X coordinate of the mouse cursor
  htmlPlayArea.onmousemove = function(domEvent) {
      mouseX = domEvent.clientX;
    }

this.moveCatcher = function() {
  var leftMargin = htmlPlayArea.getBoundingClientRect().left;
  //move to the right && movement limitation
  if (mouseX - catcherX - leftMargin > 0 && catcherX < p_fieldWidth - this.width/2) {
  // controll the speed
    catcherX += this.speed/100;
  }
  //move to the left && movement limitation
  if (mouseX - catcherX - leftMargin < 0 && catcherX > 0 + this.width/2) {
    catcherX -= this.speed/100;
  }
  if (mouseX === catcherX) {
    catcherX = mouseX;
  }
    htmlCatcher.style.left = catcherX - self.width/2 + "px";

    return catcherX;
  }




}
