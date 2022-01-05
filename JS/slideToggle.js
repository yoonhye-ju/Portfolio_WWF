$(function(){
  $('.menuButton').click(function(){
    $('.menu').slideToggle();
    $('.donateRight').toggleClass("rightTop");
    $('#back').toggleClass("backTop");
  });
});

$(window).resize(function(){
  if(window.innerWidth>=500){
      $(".menu").show();
  }
});