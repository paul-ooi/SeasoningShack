window.onload = pageReady;

function pageReady() {
  
  var giftC50 = document.getElementById("gc-50");
  var giftC100 = document.getElementById("gc-100");
  var gift50 = document.getElementById("50gc");
  var gift100 = document.getElementById("100gc");
  var giftCardBox = document.getElementById("gift-card-content");
  
  var buyerForm = document.getElementById("buyer-details");
  
  var subForm = document.forms.gift_card_name;
  var confirmCard = document.getElementById("confirmation");
  
  giftC100.onclick = card100;
  giftC50.onclick = card50;

  function fadeIn(buyerForm) {
    buyerForm.style.opacity = 0;

    var clickCard = function() {
    buyerForm.style.opacity = +buyerForm.style.opacity + 0.08;

      if (+buyerForm.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(clickCard)) || setTimeout(clickCard, 10)
      }
    };
    clickCard();
  }
  
  function card100() {
    if (giftC100.onclick) {
      gift100.style.opacity = "1";
      gift50.style.opacity = null;
      fadeIn(buyerForm);
      buyerForm.style.display = "block";
    } 
  }
  function card50() {
    if (giftC50.onclick) {
      gift50.style.opacity = "1";
      gift100.style.opacity = null;
      fadeIn(buyerForm);
      buyerForm.style.display = "block";
    } 
  }

  subForm.onsubmit = function () {
    scrollTo(document.body, 0);
    giftCardBox.style.display = "none";
    confirmCard.style.display = "block";
    return false;
  }

}