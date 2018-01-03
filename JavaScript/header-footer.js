window.addEventListener("load", pageReady, false);

function pageReady() {
  //Make Header change size on Scroll
  var fullpage = window.document;
  var header = document.getElementsByTagName('header')[0];
  var mainElem = document.getElementById('locations');


  function resizeHeader(){
      if (window.pageYOffset < 125){
        // console.log('first fired');
      header.classList.remove('small');
      header.classList.add('large');
      }
      if (window.pageYOffset > 125){
        // console.log('2nd fired');
      header.classList.remove('large');
      header.classList.add('small');
      }
  }//End of resizeHeader

  fullpage.addEventListener("scroll",resizeHeader,false);//Listen for scrolled movement

}//end of pageReady
