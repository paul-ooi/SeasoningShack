window.addEventListener('load', pageReady, false);

function pageReady() {
  //Grab Slides and Slider Index
  var promoSlides = document.getElementsByClassName('promo-detail');
  // console.log(promoSlides);
  var promoIndexContainer = document.getElementById('feature-index');
  // console.log(promoIndexContainer);
  var promoIndex = promoIndexContainer.getElementsByTagName('li');
  // console.log(promoIndex);
  var currentSlide;
  var currentIndex;


  //Setup the Interval and counter variables
  var runInterval;
  var counter = 0;

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
      // console.log(listVar[i]);
      //Pass the target object to the function called by the eventListener
      listVar[i].addEventListener(eventString,function(){funcName(this)}, false);
    }//end of for loop
  }//end of addListener

  //Begin automated Slide progression
  runInterval = setInterval(changeSlide,2500);


  addListener (promoIndex, "click", changeNow);

}//end of pageReady
