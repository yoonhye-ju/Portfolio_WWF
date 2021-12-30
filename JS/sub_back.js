
$(document).ready(function(){
$('.emails').change(function(){
  let val=$('.emails option:selected').val();
  if(val == 'email1'){
      $("input[type=email]").attr('placeholder', 'ex) wwf@wwf.co.kr');
  } else{
      $("input[type=email]").attr('placeholder', '');
  }
});
});

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

$(document).ready(function () {
  $('.check').click(function () {
    alert("옳지 않은 계좌 정보 입니다.")
  });
});