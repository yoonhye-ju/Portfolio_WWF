$(document).ready(function () {
  $('.emails').change(function () {
    let val = $('.emails option:selected').val();
    if (val == 'email1') {
      $("input[type=email]").attr('placeholder', 'ex) wwf@wwf.co.kr');
    } else {
      $("input[type=email]").attr('placeholder', '');
    }
  });
});