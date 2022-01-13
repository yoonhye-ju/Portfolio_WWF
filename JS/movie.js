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

