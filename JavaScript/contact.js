// NOTE:
// JS: Hours based on day is missing


// Global Variables and Functions
var _gid = function(p_id) {
  var id = document.getElementById(p_id);
  return id;
}

// Location Section
var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var annexHours = _gid("annex-hours");
var kensingtonHours = _gid("kensington-hours");
var today = new Date();
var day = dayArray[today.getDay()];
var hour = 0;
if (day == 0|| day==6) {
  hour = 11;
}
else {
  hour = 10;
}
annexHours.innerHTML = "Open until " + hour + "pm on " + day;
kensingtonHours.innerHTML = "Open until " + hour + "pm on " + day;


// Form Section

// Display Message
function displayMessage(p_nm, p_phone, p_email, p_subject, p_promo, p_msg) {
  var displayConfirmation = _gid("confirmation");
  var displayForm = _gid("contact-id");
  var htmlName = _gid("conf-nm");
  var htmlPhone = _gid("conf-phone");
  var htmlEmail = _gid("conf-email");
  var htmlSubject = _gid("conf-subject");
  var htmlPromotion = _gid("conf-promotion");
  var htmlMsg = _gid("conf-msg");

  htmlName.innerHTML = p_nm;
  htmlPhone.innerHTML = p_phone;
  htmlEmail.innerHTML = p_email;
  htmlSubject.innerHTML = p_subject;
  htmlPromotion.innerHTML = p_promo;
  htmlMsg.innerHTML = p_msg;

  displayForm.style.display = 'none';
  displayConfirmation.style.display = 'block';
}

// Form Validation
var htmlForm = document.forms.contact_nm;
var completionFlag = 0;
htmlForm.onsubmit = formValidation;

function formValidation() {
  var validationFlag;

  var name = nameValidation();
  var phone = phoneValidation();
  var email = emailValidation();
  var subject = subjectValidation();
  var promotion = getPromotionValue();
  var message = messageValidation();

  if (!completionCheck()) {
    validationFlag = false;
  }
  else{
    console.log("test");
    displayMessage(name, phone, email, subject, promotion, message);
    validationFlag = false; // should be true, but for preventing form submission
  }

  return validationFlag;
}

// Name Validation
function nameValidation() {
  var htmlFn = _gid("fn");
  var htmlLn = _gid("ln");
  var htmlFnError = _gid("fn-err");
  var htmlLnError = _gid("ln-err");
  var name = htmlFn.value + " " + htmlLn.value;
  htmlFnError.innerHTML = "";
  htmlLnError.innerHTML = "";

  if (htmlFn.value === "" || htmlFn.value === null) {
    htmlFnError.innerHTML = "*Please enter your first name.";
    completionFlag = -1;
  }
  if (htmlLn.value === "" || htmlLn.value === null) {
    htmlLnError.innerHTML = "*Please enter your last name.";
    completionFlag = -1;
  }

return name;
}

// Phone# Validation
function phoneValidation() {
  var htmlPhone = _gid("phone");
  var validPhoneFormat = /^[\+]?[1]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
  var validation = validPhoneFormat.test(htmlPhone.value);
  var htmlPhoneError = _gid("phone-err");
  htmlPhoneError.innerHTML = "";

  if (!validation) {
    htmlPhoneError.innerHTML = "*Please enter a valid phone number."
    completionFlag = -1;
  }
  return htmlPhone.value;
}

// Email Validation
function emailValidation() {
  var htmlEmail = _gid("email");
  var validEmailFormat =   /[^\s@]+@[^\s@]+\.[^\s@]+/;
  var validation = validEmailFormat.test(htmlEmail.value);
  var htmlEmailError = _gid("email-err");
  htmlEmailError.innerHTML = "";

  if (!validation) {
    htmlEmailError.innerHTML = "*Please enter a valid email address."
    completionFlag = -1;
  }
  return htmlEmail.value;
}

// Subject Suggestion
var htmlSubject = _gid("subject");
htmlSubject.onchange = subjectSuggestion;
htmlSubjectSuggestion = _gid("subject-suggestion");
function subjectSuggestion() {
  var message;
  switch (htmlSubject.value) {
    case "location":
      message = "Tip: You can find our locations and hours from <a href='locations.html'>Locations</a> page.";
      break;
    case "booking":
      message = "Tip: Please book an event from this page. <a href='event-bookings.html'>Event Booking</a>";
      break;
    case "services":
      message = "Tip: You can find our menu from this page. <a href='menu.html'>Menu</a>";
      break;
    case "careers":
      message = "Tip: Please find the opning positions from this page. <a href='careers.html'>Careers</a>";
      break;
    case "others":
      message = "";
      break;
    default:
      message = "Please select an option.";

  }
  htmlSubjectSuggestion.innerHTML = message;
}

// Subject Validation
function subjectValidation() {
  var htmlSubjectError = _gid("subject-err");
  htmlSubjectError.innerHTML = "";

  if (htmlSubject.value == "default") {
    htmlSubjectError.innerHTML = "*Please select an option.";
    completionFlag = -1;
  }
  return htmlSubject[htmlSubject.selectedIndex].text;
}

// Value of promotion
function getPromotionValue() {
  var htmlPromotion = _gid("promotion");
  var promotionMsg;
  if (htmlPromotion.checked) {
    htmlPromotion.value = "yes";
    promotionMsg = "I'd like to receive promotional emails."
  }
  else {
    htmlPromotion.value = "no";
    promotionMsg = "No, don't send any promotional emails."
  }

  return promotionMsg;
}

// Message Validation
function messageValidation() {
  var htmlMessage = _gid("msg");
  var htmlMessageError = _gid("msg-err");
  var messageLength = htmlMessage.value.length;
  htmlMessageError.innerHTML = "";

  if (htmlMessage.value == "" || htmlMessage.value == null) {
    htmlMessageError.innerHTML = "*Please enter your message.";
    completionFlag = -1;
  }
  else if (messageLength >= 1500) {
    htmlMessageError.innerHTML = "*Message must be less than 1500 charactors.";
    completionFlag = -1;
  }
  return htmlMessage.value;
}

// Completion Check
function completionCheck() {
  var htmlSubmisionErrorMsg = _gid("submit-err");
  var errorMsg = "Error: Please complete the form."
  if (completionFlag < 0) {
    htmlSubmisionErrorMsg.innerHTML = errorMsg;
    return false;
  }
  else
    return true
}
