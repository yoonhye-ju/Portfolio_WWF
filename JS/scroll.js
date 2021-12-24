
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
