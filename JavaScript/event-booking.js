window.addEventListener('load', pageReady, false);

function pageReady () {
  //Get elements for Gallery images
  var gallery1 = document.getElementById('location1');
  var gallery2 = document.getElementById('location2');
  var gallery1Images = gallery1.getElementsByTagName('figure');
  var gallery2Images = gallery2.getElementsByTagName('figure');

  //get elements for form
  var quoteBtns = document.getElementsByClassName('button quote');
  var closeBtn = document.getElementById('close');
  var formHandler = document.forms.quote;
  var labelFields = document.querySelectorAll('#cust_info label:not(.feedback_msg)');
  var inputFields = document.querySelectorAll('#cust_info input');
  var feedback = document.getElementsByClassName('feedback_msg');

//HELPER FUNCTIONS
  //add event listeners to elements
  function addListener (listVar, eventString, funcName) {
    for (var i=0; i < listVar.length; i++) {
      listVar[i].addEventListener(eventString, funcName, false);
    }//end of for loop
  }//end of addListener

  //Check form item is valid, if not set feedback msg
  function validate(fValue, valid, Label) {
      //If the value does not
  }

// GALLERY SCRIPTS
  //enlarge selected gallery item
  function focusItem () {
    var currentHero = this.parentElement.querySelector('.hero'); //get the current Hero item
    currentHero.classList.remove('hero');
    this.classList.add('hero');//make the clicked target the new Hero
  }//end of focusItem

  //add click listeners to all images in gallery
  addListener(gallery1Images, "click", focusItem);
  addListener(gallery2Images, "click", focusItem);

  //add click listener for Form elements
  addListener(quoteBtns, "click", showForm);
  closeBtn.addEventListener("click", hideForm, false);


// FORM SCRIPTS
  function showForm() {
  formHandler.style.left = "2%";
  }//end of showForm

  function hideForm() {
  formHandler.removeAttribute("style");
  formHandler.reset();
  }//end of hideForm

  function labelSmall (label) {
    label.classList.add('small');
  }//end of labelSmall

  function labelNormal (label) {
    label.removeAttribute('class');
  }//end of labelNormal

  function checkValue(label) {
    var content = label.nextElementSibling.value;
    var feedbackLabel = label.parentElement.children[2];
    //If there's content in the Input, keep the label hidden
    if (content != "" || content != null) {
    //If the content is present
    label.style.display = "none";
    feedbackLabel.removeAttribute('style');
    } else {
    //content is not present, bring back the label
    label.removeAttribute('style');
    feedbackLabel.style.display = "block";
    feedbackLabel.textContent = "Must not be empty";
    }
  }//end of checkValue

//add Event listeners to the inputFields and labelFields
for (var i = 0; i < inputFields.length; i ++ ) {
  let targetLabel = labelFields[i];
  inputFields[i].addEventListener("focus", function(){
  labelSmall(targetLabel);
  },false);
  inputFields[i].addEventListener("blur", function(){
  labelNormal(targetLabel);
  },false);
  inputFields[i].addEventListener("change", function(){
  checkValue(targetLabel); //when there's a change in the value, check if there's anything in the input
  },false);
}


//Form Handling
var today = new Date().getTime();
var maxDate = new Date(today).setDate(60);
var minDate = new Date(today).setDate(14);
//figure out Date format and comparing

var datePicker = document.getElementById("event_date");
datePicker.setAttribute("min",minDate);
datePicker.setAttribute("max",maxDate);

// var dateRegEx = / /;
//get date picker element
//restrict min and max of possible event_date

var eventDetails = {
  name: "",
  email: "",
  phone: "",
  location: "",
  size: "",
  date: ""
};

//setup regEx Object
var validator = {
  alphaOnly: /^[A-Za-z ]+$/, //check only letters
  email: /[^@]+@[^@]+$/, //valid email
  phone: /^(\d{10})|(\d{3}-\d{3}-\d{4})$/, //valid canadian phone number
  date: /^(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})$/ //check date
};

console.log(feedback);
function onSubmission() {
//put info into eventDetails Object
eventDetails.name = formHandler.cust_name.value;
eventDetails.email = formHandler.cust_email.value;
eventDetails.phone = formHandler.cust_phone.value;
eventDetails.location = formHandler.location.value;
eventDetails.size = formHandler.party_size.value;
eventDetails.date = Date.parse(formHandler.event_date.value);

//Use validator object to check certain RegEx of the values - results are Bool
var name = validator.alphaOnly.test(eventDetails.name);
var email = validator.email.test(eventDetails.email);
var phone = validator.phone.test(eventDetails.phone);
var location = validator.alphaOnly.test(eventDetails.location);
var size = validator.alphaOnly.test(eventDetails.size);
var date = validator.date.test(eventDetails.date);


//check valid Name
if (name == false) {
  feedback[0].style.display = "block";
  feedback[0].textContent = "Must be only letters and spaces";
  // return false;
} else {
  feedback[0].removeAttribute('style');
  feedback[0].textContent = "";
}

//check valid email
if (email == false) {
  feedback[1].style.display = "block";
  feedback[1].textContent = "Must be valid email address";
  // return false;
} else {
  feedback[1].removeAttribute('style');
  feedback[1].textContent = "";
}


//check valid phone
if (phone == false) {
  feedback[2].style.display = "block";
  feedback[2].textContent = "Format must be 416-123-4567";
  // return false;
} else {
  feedback[3].removeAttribute('style');
  feedback[3].textContent = "";
}
//check valid location as AX or KN
if (location == false || eventDetails.location != "AX" || eventDetails.location != "KN" ) {
    feedback[3].style.display = "block";
    feedback[3].textContent = "Not valid entry";
    // return false;
  } else {
  feedback[3].removeAttribute('style');
  feedback[3].textContent = "";
}

//check valid size
if (eventDetails.size != "small" || eventDetails.size != "medium" || eventDetails.size != "large" ) {
    feedback[4].style.display = "block";
    feedback[4].textContent = "Not valid entry";
    // return false;
  } else {
    feedback[4].removeAttribute('style');
    feedback[4].textContent = "";
  }

console.log(formHandler.event_date.value);

console.log(eventDetails.date);
console.log(minDate);
console.log(maxDate);
//check valid date
if (date == false || eventDetails.date == " " || eventDetails.date == null || eventDetails.date < minDate || eventDetails.date > maxDate) {
    feedback[5].style.display = "block";
    feedback[5].textContent = "Must not be less than 1 week or more than 60 days from today";
    // return false;

}

//
// return false; //prevent action attribute
} //end of onSubmission
formHandler.addEventListener('submit', onSubmission, false);


}//end of pageready
