
$(function () {
  $('.menu>li').mouseover(function () {
    $(this).children('.sub').stop().slideDown()
  }).mouseout(function () {
    $('.sub').stop().slideUp();
  });
});



$(window).scroll(function(){
  let wb=$(this).scrollTop();
  if(wb>300){
    $('.workbox1').css("transform","translateY(0px)").css("opacity","1");
  }
  if(wb>350){
    $('.workbox2').css("transform","translateY(0px)").css("opacity","1");
  }
  if(wb>400){
    $('.workbox3').css("transform","translateY(0px)").css("opacity","1");
  }
  if(wb>450){
    $('.workbox4').css("transform","translateY(0px)").css("opacity","1");
  }
  if(wb>500){
    $('.workbox5').css("transform","translateY(0px)").css("opacity","1");
  }
  if(wb>550){
    $('.workbox6').css("transform","translateY(0px)").css("opacity","1");
  }
  if(wb>800){
    $('.middle_textbox>h1').css("transform","translateY(0px)").css("opacity","1");
  }
  if(wb>900){
    $('.middle_textbox p').css("transform","translateY(0px)").css("opacity","1");
  }
  if(wb>1000){
    $('#counts').css("transform","translateY(0px)").css("opacity","1");
  } 

  if(wb>3300){
    $('.elephant').css("transform","translateY(0px)").css("opacity","1");
  }

  if(wb>3350){
    $('.panda').css("transform","translateY(0px)").css("opacity","1");
  }
  if(wb>3400){
    $('.tiger').css("transform","translateY(0px)").css("opacity","1");
    $('.space1').css("transform","translateY(0px)").css("opacity","1");
  }
  if(wb>3450){
    $('.polarbear').css("transform","translateY(0px)").css("opacity","1");
    $('.space2').css("transform","translateY(0px)").css("opacity","1");
  }
  if(wb>3500){
  $('.space3').css("transform","translateY(0px)").css("opacity","1");
  }
  if(wb>3600){
  $('.space4').css("transform","translateY(0px)").css("opacity","1");
  }
});


$(function(){
  let counter=782000;
  counterSpeed();
  function counterSpeed(){
    counterbox=setInterval(countMax, 1);

    function countMax(){
      counter++;
      if (counter>784016){
        clearInterval(counterbox);
      } else{
        $(".countBox1 h3").text(counter);
      }
    }
  }
});

$(function(){
  let counter=128000;
  counterSpeed();
  function counterSpeed(){
    counterbox=setInterval(counterMax, 1);
    
    function counterMax(){
      counter++;
      if(counter>130000){
        clearInterval(counterbox);
      } else{
        $(".countBox2 h3").text(counter);
      }
    }
  }
});

$(function(){
  let counter = 882000;
  counterSpeed();
  function counterSpeed(){
    counterbox=setInterval(countMax, 1);

    function countMax(){
      counter++;
      if(counter>884042){
        clearInterval(counterbox);
      }else{
        $(".countBox3 h3").text(counter);
      }
    }
  }
});

$(function() {
  let counter = 0;
  counterSpeed();
  function counterSpeed(){
    counterbox = setInterval(counterMax, 1);
    
    function counterMax(){
      counter++;
      if(counter>1300){
        clearInterval(counterbox);
      }else{
        $(".countBox4 h3").text(counter);
      }
    }
  }
});

$(document).ready(function(){
  $('.movie').mouseleave(function(){
    $(this).children('.icon_video').hide();
  });
  $('.movie').mouseover(function(){
    $(this).children('.icon_video').show();
  });


  $('.movie').eq(0).children('.icon_video').click(function(){
    $('#pop').css('display','block');
    $('.video1').css('display','block');
  });

  $('.movie').eq(1).children('.icon_video').click(function () {
    $('#pop').css('display','block');
    $('.video2').css('display', 'block');
  });

  $('.movie').eq(2).children('.icon_video').click(function () {
    $('#pop').css('display','block');
    $('.video3').css('display', 'block');
  });

  $('.movie').eq(3).children('.icon_video').click(function () {
    $('#pop').css('display','block');
    $('.video4').css('display', 'block');
  });

  $('.close').click(function(){
    $('#pop').css('display','none');
    $('.popup').css('display','none');
  });
});


function slide() {
  let w=window.innerWidth; 
  $('.slide').stop().animate({ marginLeft: -w}, function () {
    $('.slide li:first').appendTo('.slide');
    $('.slide').css({ marginLeft: 0 });
    $('#slidup').css("transform","translateX(-90%)");
  });
}
setInterval(slide, 8000);

$(function(){
  $('#slideup1').show().stop().animate({marginLeft:"-2500px"},0)
  .animate({marginLeft:'150px'},800).delay(6000).fadeOut(1000);
  $('.slideup_Text1').slideDown(4000).delay(3400).fadeOut(600);
});

// if('.slide li:nth-of-type(2)', function(){
//   $('#slideup2').show().animate({marginLeft:"-2500px"},0)
//   .animate({marginLeft:'150px'},800).delay(6000).fadeOut(1000);
//   $('.slideup_Text2').slideDown(3000).delay(4000).fadeOut(1000);
// });



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


