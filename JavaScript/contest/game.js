function Game() {
  var self = this;
  this.field = new Field();
  var timeIndicator = 240;
  var substractRemainingTime = timeIndicator/60;
  // this.time = 60;
  // this.health = 3;
  // this.score = 0;

  // Called when the start button is clicked
  this.start = function() {
    countDownTimer = setInterval(this.countdown, 1000);
    self.field.startUpdateScene();
  }
  // Stop all functions
  this.stop = function() {
    clearInterval(countDownTimer);
    clearInterval(updateScene);
    displayGameover();
  }
  // Count 60 and stop all time related functions
  this.countdown = function() {
    if (remainingTime > 0) {
      htmlTimeIndicator.innerHTML = remainingTime;
      remainingTimeIndicator -= substractRemainingTime;
      htmlTimeIndicator.style.width = remainingTimeIndicator + 'px';
      remainingTime--;
      if (health <= 0) {
        self.stop()
      }
    }
    else if (remainingTime===0) {
      self.stop();
      remainingTime--;
    }
  }
  function displayGameover() {
    var htmlGameover = _gid("gameover");
    htmlGameover.style.height = '100%';
  }

  // this.decreaseHealth = function() {
  //
  // }
  // this.addScore = function() {
  //
  // }
  // this.updateTimer = function() {
  //
  // }

}
