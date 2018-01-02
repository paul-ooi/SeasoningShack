function FallingItem(p_img, p_type, p_speed, p_score, p_x, p_id) {
  var self = this; // in order to access current fallingItem (parent object inside from the function)
  this.id = p_id;
  this.type = p_type; // food or non-food
  this.speed = p_speed; // falling speed (px/sec)
  this.score = p_score; // points that each obj has
  this.width;
  this.height;
  this.xPos = p_x; // position left of the item, 0px~(400-40)px
  this.yPos = 0;
  this.detected = false;

  // Create an object inside of area
  var foodItem = document.createElement("img");
  foodItem.src = "images/contest-" + p_img + ".svg";
  foodItem.id = p_id;
  foodItem.className = "fallingItem";
  htmlPlayArea.appendChild(foodItem);
  foodItem.style.left = p_x + "px";
  this.width = _gid(p_id).width;
  this.height = _gid(p_id).height;

}
