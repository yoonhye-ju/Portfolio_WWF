window.onload = function () {

  var arrColor = ["img/sub_background.jpg", "img/sub_backgroundB.jpg", "img/sub_backgroundC.jpg"];
  function chc() {
    var arrNum = Math.floor(Math.random() * arrColor.length);
    back.style.backgroundImage = url(arrColor[arrNum]);
  }

  setInterval(chc, 1000);
}