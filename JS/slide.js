
$(function () {
  let w = window.innerWidth;

  function slide() {
    $('.slide').stop().animate({ marginLeft: -w }, function () {
      $('.slide li:first').appendTo('.slide');
      $('.slide').css({ marginLeft: 0 });
    });
  }

  function prev() {
    $('.slide li:last').prependTo('.slide');
    $('.slide').css({ marginLeft: -w });
    $('.slide').stop().animate({ marginLeft: 0 });
  }

  setInterval(slide, 5000);

  $('.previous').click(function () {
    prev();
  });
  
  $('.next').click(function () {
    slide();
  });
});


let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);}
function currentSlide(n) {
  showSlides(slideIndex = n);}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("historyBox");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


