$(function(){
  $('.menuButton').click(function(){
    $('.menu').slideToggle();
    $('.donateRight').toggleClass("rightTop");
    $('#back').toggleClass("backTop");
  });
});

$(window).resize(function(){
  if(window.innerWidth>=850){
      $('.menu').show();
  }
  if(window.innerWidth<=849){
    $('.menu').hide();
  }
});