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
  var thanks = document.getElementById('thanks');
  var closeThanksBtn = document.getElementById('close2');


  //HELPER FUNCTION
  //add event listeners to elements
  function addListener (listVar, eventString, funcName) {
      for (var i=0; i < listVar.length; i++) {
        listVar[i].addEventListener(eventString, funcName, false);
      }
  }//end of addListener


  // GALLERY SCRIPTS
  //enlarge selected gallery item
  function focusItem () {
      var currentHero = this.parentElement.querySelector('.hero'); //get the current Hero item
      currentHero.classList.remove('hero');
      this.classList.add('hero');//make the clicked target the new Hero
  }//end of focusItem


//ADD LISTENERS
  //add click listeners to all images in gallery
  addListener(gallery1Images, "click", focusItem);
  addListener(gallery2Images, "click", focusItem);

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

  //add Event listeners to the Form Buttons
  formHandler.addEventListener('submit', onSubmission, false);
  addListener(quoteBtns, "click", showForm);
  closeBtn.addEventListener("click", hideForm, false);
  closeThanksBtn.addEventListener("click", closeThanks, false);

// FORM SCRIPTS
  function showForm() {
      formHandler.reset(); //reset the form for a new submission
      formHandler.style.left = "5%";
  }//end of showForm

  function hideForm() {
      formHandler.removeAttribute("style");
  }//end of hideForm

  function showThanks() {
      thanks.style.display = "block";
  }//end of showThanks

  function closeThanks() {
      thanks.removeAttribute("style");
  }//end of showThanks

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



  //VALIDATE FORM INPUT
  var today = new Date();
  var maxDate = new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000);//this is furthest in advance a customer can book
  var minDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);//this is the soonest a customer can book

  var eventDetails = {
      name: "",
      email: "",
      phone: "",
      location: "",
      size: "",
      date: ""
  };

  //setup regEx Object validator
  var validator = {
      alphaOnly: /^[A-Za-z ]+$/, //check only letters
      email: /[^@]+@[^@]+$/, //valid email
      phone: /^(\d{10})|(\d{3}-\d{3}-\d{4})$/, //valid canadian phone number
      date: /^(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})$/ //check date
  };

  function onSubmission(e) {
    e.preventDefault();
    //put form details into eventDetails Object
    eventDetails.name = formHandler.cust_name.value;
    eventDetails.email = formHandler.cust_email.value;
    eventDetails.phone = formHandler.cust_phone.value;
    eventDetails.location = formHandler.location.value;
    eventDetails.size = formHandler.party_size.value;
    eventDetails.date = formHandler.event_date.value;

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
    } else {
        feedback[0].removeAttribute('style');
        feedback[0].textContent = "";
    }

    //check valid email
    if (email == false) {
        feedback[1].style.display = "block";
        feedback[1].textContent = "Must be valid email address";
    } else {
        feedback[1].removeAttribute('style');
        feedback[1].textContent = "";
    }

    //check valid phone
    if (phone == false) {
        feedback[2].style.display = "block";
        feedback[2].textContent = "Format must be 416-123-4567";
    } else {
        feedback[3].removeAttribute('style');
        feedback[3].textContent = "";
    }

    //check valid location as AX or KN
    if (eventDetails.location == "AX" || eventDetails.location == "KN" ) {
          feedback[3].removeAttribute('style');
          feedback[3].textContent = "";
      } else {
          feedback[3].style.display = "block";
          feedback[3].textContent = "Not valid entry";
          location = false;
    }

    //check valid size
    if (eventDetails.size == "small" || eventDetails.size == "medium" || eventDetails.size == "large" ) {
          feedback[4].removeAttribute('style');
          feedback[4].textContent = "";
      } else {
          feedback[4].style.display = "block";
          feedback[4].textContent = "Not valid entry";
          size = false;
      }

    //check valid date
    if (eventDetails.date == NaN || eventDetails.date == null || eventDetails.date == "") {
          feedback[5].style.display = "block";
          feedback[5].textContent = "Date must not be empty";
          date = false;
    } else if (Date.parse(eventDetails.date) > maxDate || Date.parse(eventDetails.date) < minDate) {
          feedback[5].style.display = "block";
          feedback[5].textContent = "Event must not be less than 1 week or more than 60 days from today";
          date = false;
    } else {
          feedback[5].removeAttribute('style');
          feedback[5].textContent = "";
          date = true;
    }

    if (name && email && phone && location && size && date) {
          formHandler.removeAttribute("style");
          showThanks();
    }

    return false; //prevent action attribute
  } //end of onSubmission


}//end of pageready
