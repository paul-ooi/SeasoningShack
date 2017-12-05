window.onload = pageReady;
function pageReady() {

  // Variables
  var rulesHtml = document.getElementById('rules');
  var howtoBtn = document.getElementsByClassName('btn-howto');
  var gameStartBtn = document.getElementsByClassName('btn-play');

  // Display and Hide Rules
  howtoBtn[0].onclick = displayRules;
  rulesHtml.onclick = hideRules;
  function displayRules() {
      rulesHtml.style.height = "100%";
      rulesHtml.style.transition = "0.3s";
  }
  function hideRules() {
    rulesHtml.style.height = "0";
    rulesHtml.style.transition = "0.3s";
  }

  // Start the game
  gameStartBtn[0].onclick = startGame;
  function startGame() {
    alert("game start!");
    // start the timer
    // start to count health
    // count score
    // start the game
    // start the chef animation
  }

}
