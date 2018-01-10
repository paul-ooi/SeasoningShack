// ABOUT US JAVASCRIPT CODE BY CZARINA GAHUNIA

// MANUAL SLIDESHOW CODE
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(imgSlide) {
  showSlides(slideIndex += imgSlide);
}

function currentSlide(imgSlide) {
  showSlides(slideIndex = imgSlide);
}

function showSlides(imgSlide) {
  var i;
  var slides = document.getElementsByClassName("img-slides");
  var dots = document.getElementsByClassName("circle");

  if (imgSlide > slides.length) {slideIndex = 1}    
  if (imgSlide < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
} 

// MODAL CODE
//SHOWS THE MODAL
var modal = document.getElementById("modal-image");

var imgModal = document.getElementById("img-left");
var modalImg = document.getElementById("modal-img01");
var caption = document.getElementById("modal-caption");

imgModal.onclick = function(){
  modal.style.display = "block";
  modalImg.src = imgModal.src;
  caption.innerHTML = imgModal.alt;
}

var modalClose = document.getElementsByClassName("modal-close")[0];

// CLOSES THE MODAL
modalClose.onclick = function() { 
  modal.style.display = "none";
} // END OF MODAL CODE