window.addEventListener("load", pageReady, false);

function pageReady() {

  //Make Header change size on Scroll
  var header = document.getElementsByTagName('header')[0];
var mainElem = document.getElementById('locations');
console.log(document.scrollTop);
  function resizeHeader(){
      console.log(window.scrollTop)
      if (document.scrollTop < 500){
        console.log('first fired');
      header.classList.remove('small');
      header.classList.add('large');
      } else {
        console.log('2nd fired');
      header.classList.remove('large');
      header.classList.add('small');
      }
  }


  mainElem.addEventListener("wheel",resizeHeader,false);






}//end of pageReady
