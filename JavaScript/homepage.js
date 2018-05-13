window.addEventListener('load', pageReady, false);

function pageReady() {
  //Grab Slides
  var promoSlides = document.getElementsByClassName('promo-detail');
  
  //Get Slider Index
  var promoIndexContainer = document.getElementById('feature-index');
  var promoIndex = promoIndexContainer.getElementsByTagName('li');

  var currentSlide;
  var currentIndex;


  //Setup the Interval and counter variables for Slider
  var runInterval;
  var counter = 0;

  //Function that advances the slide in order
  function changeSlide() {
    counter++; //advance counter to be used to target the next sibling
    //If the counter goes past the max number of slides, it goes back to the start
    if (counter >= promoSlides.length) {
    counter = 0;
    }
    deactivateCurrent();
    activateNext();
  }

  //Function interupts the automated slides to go to selected index
  function changeNow(selected) {
    clearInterval(runInterval);
    deactivateCurrent();
    counter = selected.value;
    activateNext();
    //reactivate automated slides
    runInterval = setInterval(changeSlide,2500);
  }

  //Hide the current Slide
  function deactivateCurrent() {
    currentIndex = document.querySelector('.current');
    currentSlide = document.querySelector('.active');
    currentSlide.classList.remove('active');
    currentIndex.classList.remove('current');
  }

  //Show the next Slide
  function activateNext() {
    promoSlides[counter].classList.add('active');
    promoIndex[counter].classList.add('current');
  }

  //Helper function to add Listener to a List of elements
  function addListener (listVar, eventString, funcName) {
    for (var i=0; i < listVar.length; i++) {
      //Pass the target object to the function called by the eventListener
      listVar[i].addEventListener(eventString,function(){funcName(this)}, false);
    }//end of for loop
  }//end of addListener

  //Begin automated Slide progression
  runInterval = setInterval(changeSlide,2500);


  addListener (promoIndex, "click", changeNow);

}//end of pageReady
