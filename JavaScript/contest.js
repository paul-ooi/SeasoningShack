console.log("All images used in this page are downloaded from https://www.vecteezy.com/");

window.onload = pageReady;

function pageReady() {

  // Display and Hide Rules
  htmlHowto[0].onclick = displayRules;
  htmlRules.onclick = hideRules;
  function displayRules() {
      htmlRules.style.height = "100%";
      htmlRules.style.transition = "0.3s";
  }
  function hideRules() {
    htmlRules.style.height = "0";
    htmlRules.style.transition = "0.3s";
  }

  //==== START THE GAME ====
  var game = new Game();
  htmlStart.onclick = startGame;
  htmlReplay[0].onclick = reloadPage;


  function startGame() {
    $("#start").remove();
    $(".btn-howto").remove();
    game.start();
  }

  function reloadPage() {
    location.reload();
  }
  // ============End of pageReady===============
}
