window.addEventListener('load', pageReady, false);

function pageReady () {
  var galleryItems = document.getElementsByTagName('figure');//get all gallery Items
  console.log(galleryItems);
var gallery1 = document.querySelectorAll('#location1 figure');
console.log(gallery1);
var gallery2 = document.querySelectorAll('#location1 figure');
console.log(gallery2);

  for (var i=0; i < galleryItems.length; i++) {
    //add Event Listener to each galleryItem
    galleryItems[i].addEventListener('click',
     function(){
        focusItem();
        }//end of anonymous Function within event listener
    , false);
  } //end For Loop

  function focusItem () {
    console.log(this);
    // var currentHero = document.querySelector('.hero'); //get the current Hero item
    // currentHero.classList.remove('hero');
    // target.classList.add('hero');//make the clicked target the new Hero
  }


}//end of pageready
