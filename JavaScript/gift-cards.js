window.onload = pageReady;

function pageReady() {
  
  // VARIABLES
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

  // FADE IN EFFECT WHEN DISPLAYING FORM
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
  
  // SUBMITTING FORM
  subForm.onsubmit = submitGCForm;
  
  function submitGCForm() {
    scrollTo(document.body, 0);

    var gcInfo = {
      gcamount: "",
      name: "",
      email: "",
      recname: "",
      recemail: "",
      userMsg: "" 
    };
    
    var gName = document.getElementById("cust-name");
    var gEmail = document.getElementById("cust-email");
    var gRName = document.getElementById("cust-rec-name");
    var gREmail = document.getElementById("cust-rec-email");
    var gAmt = document.getElementById("cust-amount");
    var gMsg = document.getElementById("cust-msg");
    
    var nameErr = document.getElementById("buy-name-err");
    var emailErr = document.getElementById("email-err");
    var rNameErr = document.getElementById("recepient-name-err");
    var rEmailErr = document.getElementById("rec-email-err");
    var msgErr = document.getElementById("msg-err");
    var msgLength = gMsg.length;
    
    var emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    
    var isValid = true;
    
    gcInfo.gcamount;
    gcInfo.name = subForm.buy_Name.value; 
    gcInfo.email = subForm.buy_Email.value;
    gcInfo.recname = subForm.rec_Name.value; 
    gcInfo.recemail = subForm.rec_Email.value; 
    gcInfo.userMsg = subForm.buy_Msg.value;
    
    
    //Name Validation
    if (!gcInfo.name) {
      nameErr.innerHTML = "*Please enter your name";
      isValid = false;
    } else {
      nameErr.innerHTML = "";
    }
    
    //Email Validation
    if (!emailPattern.test(gcInfo.email)) {
      emailErr.innerHTML = "*Please enter a valid email";
      isValid = false;
    } else {
      emailErr.innerHTML = "";
    }
    
    //Recepient's Name Validation
    if (!gcInfo.recname) {
      rNameErr.innerHTML = "*Please enter the recepient's name.";
      isValid = false;
    } else {
      rNameErr.innerHTML = "";
    }
    
    //Recepient's email validation
    if (!emailPattern.test(gcInfo.recemail)) {
      rEmailErr.innerHTML = "*Please enter a valid email address";
      isValid = false;
    } else if (gcInfo.recemail === gcInfo.email) {
      rEmailErr.innerHTML = "*Please enter a different email address";
      isValid = false;
    } else {
      emailErr.innerHTML = "";
    }
    
    
    // Selected Amount
    if (giftC50.checked === true) {
      gAmt.innerHTML = "$50.00";
    }
    if (giftC100.checked === true) {
      gAmt.innerHTML = "$100.00";
    }
    
    //Message Validation
    if (gcInfo.userMsg.length > 100) {
      msgErr.innerHTML = "*Your message should be at most 100 characters";
      isValid = false;
    } else { 
      msgErr.innerHTML = ""
    }
    
    if (!isValid) {
			return false;
		}
    
    gName.innerHTML = gcInfo.name; 
    gEmail.innerHTML = gcInfo.email;
    gRName.innerHTML = gcInfo.recname; 
    gREmail.innerHTML = gcInfo.recemail; 
    gMsg.innerHTML = gcInfo.userMsg;
    
    giftCardBox.style.display = "none";
    confirmCard.style.display = "block";

    return false;

  }
  
  console.log(submitGCForm);
  
  subForm.onreset = resetGCForm;
  
  function resetGCForm() {
    
    var nameErr = document.getElementById("buy-name-err");
    var emailErr = document.getElementById("email-err");
    var rNameErr = document.getElementById("recepient-name-err");
    var rEmailErr = document.getElementById("rec-email-err");
    var msgErr = document.getElementById("msg-err");
    
    nameErr.innerHTML = "";
    emailErr.innerHTML = "";
    rNameErr.innerHTML = "";
    rEmailErr.innerHTML = "";
    msgErr.innerHTML = "";
    
    
    
    
    
    
    
  }
  
  

}