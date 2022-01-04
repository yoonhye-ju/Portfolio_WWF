$(function(){
  $('.menuButton').click(function(){
    $('.menu').slideToggle();
    $('.donateRight').toggleClass("rightTop");
    $('#back').css({height: "2800px"});
  });
});