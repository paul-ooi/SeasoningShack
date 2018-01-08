window.addEventListener('load', pageReady, false);

function pageReady() {
var promoSlides = document.getElementsByClassName('promo-detail');// HTML collection of Promo Slides
var promoIndexContainer = document.getElementById('feature-index');//grab index container
console.log(promoSlides);

var promoIndex = promoIndexContainer.getElementsByTagName('li'); //gets HTML collection

var promotions = document.querySelector('#feature-slides ul');
console.log(promotions);
console.log(promoSlides.parentElement);

var promoGallery = document.getElementById("feature-slides");
console.log(promoGallery);


function addListener (listVar, eventString, funcName) {
  for (var i=0; i < listVar.length; i++) {
    console.log(listVar[i]);
    listVar[i].addEventListener(eventString,funcName, false);
  }//end of for loop
}//end of addListener

// TRY ARRAY TO CYCLE THROUGH
// var slidesArray = [];
// var indexArray = [];
// function convertToArray (listName, arrayName) {
//   for (var i=0; i < listName.length; i++){
//   arrayName.push(listName[i]);
//   }
//   console.log(arrayName);
// }
//
// convertToArray(promoSlides, slidesArray);
// convertToArray(promoIndex, indexArray);

function changeSlide() {
  var currentIndex = this.parentElement.getElementsByClassName('current')[0];//Get the active index of slider

  var currentSlide = document.getElementsByClassName('active')[0];//Get the active Slide on display

  // console.log(this);
  // console.log(this.value);
  // console.log(this.classList.contains('current')); //Does this item have current class; boolean
  // console.log(currentIndex);

  //This updates the index circle to become the new Current
    if (this.classList.contains('current') == false){
      this.classList.add('current');
      currentIndex.removeAttribute('class');
    }

  //show new slide
  promoSlides[this.value].classList.add('active');//value is from the html attribute
  currentSlide.classList.remove('active');
}//End of changeSlide



addListener (promoIndex, "click", changeSlide);

//TIMER WIP
var slideInterval = setInterval (
function() {


},
changeSlide,1000);

}//end of pageReady
