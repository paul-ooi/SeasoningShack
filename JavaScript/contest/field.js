function Field() {
  var self = this;
  this.width = 400;
  this.height = 500;
  // this.catcher = _gid("htmlCatcher");
  this.fallingItems = [];
  this.catcher = new Catcher(this.width);

  // All animations(setIntervals) nested under this function
  this.updateScene = function() {
    var catcherXpos = self.catcher.moveCatcher(); // animate catcher
    self.generateFallingItem(); // generate items
    self.moveToBottom(); // animate items
    self.collisionDetection(); // collision detection
    return catcherXpos;
  }
  this.startUpdateScene = function() {
    updateScene = setInterval(self.updateScene, 30);
  }

  // Generate Object
  this.generateFallingItem = function() {
    var probability = self.itemProbability();

    if (probability < 2) {
      var indexOfArray = random(7);
      var typeOfItem = 0;
      var speed = self.speedControl();
      var score = 0;
      var xPos = random(360);
      // Select image based on generated random number
      var imgOfItem = ['banana', 'egg', 'burger', 'pancake', 'apple_core', 'banana_peel', 'fishbone'];
      // Select type based on generated random number
      if (indexOfArray > 3) {
        typeOfItem = -1;
      }
      // Assigning score for each items based on generated random number
      if (indexOfArray <= 1) {
        // banana and egg
        score += 50;
      } else if (indexOfArray >= 2 && indexOfArray <= 3) {
        // burger and pancake
        score += 100;
      } else {
        score += 0;
      }
      itemId++; // may not necessary
      var newItem = new FallingItem(imgOfItem[indexOfArray], typeOfItem, speed, score, xPos, itemId);

      // Store newItem into fallingItems[]
      self.fallingItems.push(newItem);
      return this.fallingItems;
    }
  }

  this.moveToBottom = function() {
    var newItems = self.fallingItems;
    for (var i = 0; i < newItems.length; i++) {
      if (newItems[i].yPos <= 500) {
        newItems[i].yPos = newItems[i].yPos + newItems[i].speed;
        var itemId = _gid(newItems[i].id);
        itemId.style.top = newItems[i].yPos + "px";
      }
      if (newItems[i].yPos > 500) {
        newItems.splice(i, 1); // remove from JS
        $(itemId).remove(); // remove from html
      }
    }
  }

  this.itemProbability = function() {
    var probability;
    if (remainingTime > 30) {
      probability = random(99); // 2/100 chance to create a new item
    }
    else if (remainingTime > 15 && remainingTime <= 30) {
      probability = random(89); // 2/90 chance to create a new item
    }
    else {
      probability = random(49); // 2/50 chance to create a new item
    }
    return probability;
  }

  this.speedControl = function () {
    var speed;
    if (remainingTime > 15) {
      speed = random(5) + 2;
    }
    else {
      speed = random(5) + 5;
    }
    return speed;
  }

  this.collisionDetection = function() {
    var newItems = self.fallingItems;
    var detectionY = self.height - catcher.height;
    for (var i = 0; i < newItems.length; i++) {
      if (newItems[i].detected === false&&
        newItems[i].yPos + newItems[i].height >= detectionY &&
        newItems[i].yPos + newItems[i].height <= detectionY + 10) {
          newItems[i].detected = true;
          console.log(newItems[i].id);
      }
    }
  }

  this.collisionDetection = function() {
    var newItems = self.fallingItems;
    var detectionY = self.height - catcher.height;
    // 1. When the bottom of item reaches the detection zone (height of the catcher ~ -10px) for the first time, then
    for (var i = 0; i < newItems.length; i++) {
      if (newItems[i].detected === false &&
        newItems[i].yPos + newItems[i].height >= detectionY &&
        newItems[i].yPos + newItems[i].height <= detectionY + 10) {
        // 2. Change the detected property of the item, so the following code won't be dupulicated
        newItems[i].detected = true;
        // 3. Get centre X coordinate of catcher and items, then calculate the absolute value
        var catcherX = self.updateScene();
        var itemCentreX = newItems[i].xPos + newItems[i].width/2;
        var absoluteX = Math.abs(catcherX - itemCentreX);
        // 4. Access to the item properties
        var itemType = newItems[i].type;
        var itemScore = newItems[i].score;
        var itemId = _gid(newItems[i].id);
        // 5. If the centre of the item is...
        if (self.catcher.width/2 > absoluteX) {
          // 5-1. less than half of catcher width (catch)
          if (itemType == 0) {
            // 5-1-1. item is food
            score += itemScore;
            $(itemId).remove(); // remove from html
            newItems.splice(i, 1); // remove from JS
          }
          else {
            // 5-1-2. item is not food
            health -= 1;
            $(itemId).remove(); // remove from html
            newItems.splice(i, 1); // remove from JS
          }
        }
        else {
          // 5-2.more than half of the catcher width (miss)
          if (itemType == 0) {
            // 5-2-1. item is food
            health -= 1;
          }
        }
        // htmlLife.innerHTML = health;
        displayHealth(health);
        htmlScore.innerHTML = score;
      }
    }
  }

  function displayHealth(p_health) {
    if (p_health==2) {
      _gid("life3").src = 'images/contest-nolife.svg';
    }
    if (p_health==1) {
      _gid("life2").src = 'images/contest-nolife.svg';
    }
    if (p_health==0) {
      _gid("life1").src = 'images/contest-nolife.svg';
    }
  }
}
