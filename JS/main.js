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
});


$(function() {
  let counter = 782000;
  counterSpeed();
  function counterSpeed() {
    counterbox = setInterval(countMax, 1);

    function countMax() {
      counter++;
      if (counter > 784016) {
        clearInterval(counterbox);
      } else {
        $(".countBox1 h3").text(counter);
      }
    }
  }
});

$(function() {
  let counter = 128000;
  counterSpeed();
  function counterSpeed() {
    counterbox = setInterval(counterMax, 1);
    
    function counterMax() {
      counter++;
      if (counter > 130000) {
        clearInterval(counterbox);
      } else {
        $(".countBox2 h3").text(counter);
      }
    }
  }
});

$(function() {
  let counter = 882000;
  counterSpeed();
  function counterSpeed() {
    counterbox = setInterval(countMax, 1);

    function countMax() {
      counter++;
      if (counter > 884042) {
        clearInterval(counterbox);
      } else {
        $(".countBox3 h3").text(counter);
      }
    }
  }
});

$(function() {
  let counter = 0;
  counterSpeed();
  function counterSpeed() {
    counterbox = setInterval(counterMax, 1);
    
    function counterMax() {
      counter++;
      if (counter > 1300) {
        clearInterval(counterbox);
      } else {
        $(".countBox4 h3").text(counter);
      }
    }
  }
});