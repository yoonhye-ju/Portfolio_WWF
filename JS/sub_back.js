
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

$(document).ready(function () {
  $('.donateButton').click(function () {
    alert("후원 정보를 입력해주세요.")
  });
});


function selectAll(selectAll) {
  let checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = selectAll.checked
  })
}

function load1(){
  window.open("popup1.html","", "left=800, top=100, width=500, height=800");
}

function load2(){
  window.open("popup2.html","", "left=800, top=100, width=500, height=800");
}


$(function () {
  $('.temporary').click(function () {
    $("#donate_bottom").hide();
    $("#donate_bottom2").show();
  });
  $('.long').click(function () {
    $("#donate_bottom").show();
    $("#donate_bottom2").hide();
  });
});