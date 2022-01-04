$(document).ready(function () {
  $('.banks').change(function () {
    let state = $('.banks option:selected').val();
    if (state == 'bank1') {
      $('.selfBank').show();
    } else {
      $('.selfBank').hide();
    }
  });
});

$(function () {
  $('.temporary').click(function () {
    $("#donate_bottom").hide();
    $("#donate_bottom2").show();
    $('#back').css({height: '2200px'});
    $('.donateRight').css({height: '1770px'});
  });
  $('.long').click(function () {
    $("#donate_bottom").show();
    $("#donate_bottom2").hide();
    $('#back').css({height: '2600px'});
    $('.donateRight').css({height: '2150px'})
  });
});

$(function (){
  $('.creditCard').click(function(){
    $('.bottomBox').hide();
    $('.creditCard_Box').show();
    $('#donate_bottom').css({height: '900px'});
    $('#back').css({height: '2650px'});
    $('.donateRight').css({height: '2250px'});
  });
  $('.auto').click(function(){
    $('.bottomBox').show();
    $('.creditCard_Box').hide();
    $('#donate_bottom').css({height: '800px'});
    $('#back').css({height: '2600px'});
    $('.donateRight').css({height: '2150px'});
  });
});

  