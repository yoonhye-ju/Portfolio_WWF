
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
});

$(function(){
  $('.icon_video1').click(function(){
    $('.popup1').css('display','block')();
  });
  $('#close').click(function(){
    $('.popup1').css('display','none')();
  });

  $('.icon_video2').click(function(){
    $('.popup2').css('display','block')();
  });
  $('#close').click(function(){
    $('.popup2').css('display','none')();
  });

  $('.icon_video3').click(function(){
    $('.popup3').css('display','block')();
  });
  $('#close').click(function(){
    $('.popup3').css('display','none')();
  });

  $('.icon_video4').click(function(){
    $('.popup4').css('display','block')();
  });
  $('#close').click(function(){
    $('.popup4').css('display','none')();
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
// setInterval(slide, 5000);

// $(document).ready(function(){
//   $('#slideup').on('show animate{marginLeft:-2000}', function(){
//     $('#slideup').animate({marginLeft:10}),function(){}
//     $('.slideup_Text1').animate({marginTop:500});
//   });
//   $('#slideup').animate(2000, function(){
//     $('.slideup_Text2').showSlides(2000);
//   });
//   $('#slideup').animate(3000, function(){
//     $('.slideup_Text3').showSlides(3000);
//   });
//   $('#slideup').animate(4000, function(){
//     $('.slideup_Text4').showSlides(4000);
//   });
//   $('#slideup').animate(5000, function(){
//     $('.slideup_Text4').showSlides(5000);
// });
// });




// function fadeIn(){
//   $('.slideup_Text1').fadeIn('fast', 1000);
//   $('.slideup_Text1').fadeOut('fast', 1000);
// }
// setInterval(fadeIn, 5000);


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


