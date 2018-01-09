window.onload = pageReady;

function pageReady() {
  
  var giftC50 = document.getElementById("gc-50");
  var giftC100 = document.getElementById("gc-100");
  var gift50 = document.getElementById("50gc");
  var gift100 = document.getElementById("100gc");
  
  giftC100.onclick = card100;
  giftC50.onclick = card50;
  
  function card100() {
    if (giftC100.onclick) {
      gift50.style.opacity = "0.5";
      gift100.style.opacity = null;
    }
  }
  function card50() {
    if (giftC50.onclick) {
      gift100.style.opacity = "0.5";
      gift50.style.opacity = null;
    }
  }
  
  
  
  
  
  
  
}