// GLOVAL VARIABLES AND FUNCTIONS
// Those are accessible by ALL scripts

// 1. Shorthand for document.getElementById()
function _gid(htmlId) {
  var id = document.getElementById(htmlId);
  return id;
}

// 2. Generate random number (min 0 ~ maxNum)
function random(maxNum) {
  var randomNum = Math.floor(Math.random() * maxNum);
  return randomNum;
}

var htmlPlayArea = _gid("area");
var htmlStart = _gid("start");
var htmlCatcher = _gid("catcher");
var htmlRules = document.getElementById('rules');
var htmlHowto = document.getElementsByClassName('btn-howto');
var htmlReplay = document.getElementsByClassName('btn-replay');

// game.js
var remainingTime = 60;
var health = 3;
var score = 0;
var countDownTimer;
var remainingTimeIndicator = 244;
var htmlLife = _gid("life");
var htmlScore = _gid("score");
var htmlTimer = _gid("timer-outline");
var htmlTimeIndicator = _gid("timer");

// field.js
var itemId = 0;
var updateScene;


// catcher.js
var animateCatcher;
