window.addEventListener('load', pageReady, false);

function pageReady () {
  //Get elements for Gallery images
  var gallery1 = document.getElementById('location1');
  var gallery2 = document.getElementById('location2');
  var gallery1Images = gallery1.getElementsByTagName('figure');
  var gallery2Images = gallery2.getElementsByTagName('figure');
  // console.log(gallery1);
  // console.log(gallery2);
  // console.log(gallery1Images);
  // console.log(gallery2Images);

  //get elements for form
  var quoteBtns = document.getElementsByClassName('button quote');
  var closeBtn = document.getElementById('close');
  var formHandler = document.forms.quote;
  var labelFields = document.querySelectorAll('#cust_info label:not(.feedback_msg)');
  var inputFields = document.querySelectorAll('#cust_info input');

//HELPER FUNCTIONS
  //add event listeners to elements
  function addListener (listVar, eventString, funcName) {
    for (var i=0; i < listVar.length; i++) {
      // console.log(listVar[i]);
      listVar[i].addEventListener(eventString, funcName, false);
    }//end of for loop
  }//end of addListener


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
    // console.log(label.nextElementSibling);
    var content = label.nextElementSibling.value;
    var contentType = label.nextElementSibling.type;
    var feedbackLabel = label.parentElement.children[2];
    if (content != "") {
    label.style.display = "none";
    feedbackLabel.removeAttribute('style');
    } else {
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
  checkValue(targetLabel);
  },false);

}



}//end of pageready
