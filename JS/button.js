$(document).ready(function () {
  $(".auto p").click(function () {
    $(this).addClass("active").css({ color: "white" });
    $(".creditCard p").removeClass("active").css({ color: "lightskyblue" });
  });
  $(".creditCard p").click(function () {
    $(this).addClass("active").css({ color: "white" });
    $(".auto p").removeClass("active").css({ color: "lightskyblue" }).css({ color: "lightskyblue" });
  });
  $(".long p").click(function () {
    $(this).addClass("active").css({ color: "white" });
    $(".temporary p").removeClass("active").css({ color: "lightskyblue" });
  });
  $(".temporary p").click(function () {
    $(this).addClass("active").css({ color: "white" });
    $(".long p").removeClass("active").css({ color: "lightskyblue" }).css({ color: "lightskyblue" });
  });
  $(".donateMoney p").click(function () {
    $(this).addClass("active").css({ color: "white" });
    $(".donateMoney2 p").removeClass("active").css({ color: "lightskyblue" });
  });
  $(".donateMoney2 p").click(function () {
    $(this).addClass("active").css({ color: "white" });
    $(".donateMoney p").removeClass("active").css({ color: "lightskyblue" }).css({ color: "lightskyblue" });
  });
  $(".oneTime1 p").click(function () {
    $(this).addClass("active").css({ color: "white" });
    $(".oneTime2 p").removeClass("active").css({ color: "lightskyblue" });
    $(".oneTime3 p").removeClass("active").css({ color: "lightskyblue" });
    $(".oneTime4 p").removeClass("active").css({ color: "lightskyblue" });
  });
  $(".oneTime2 p").click(function () {
    $(this).addClass("active").css({ color: "white" });
    $(".oneTime1 p").removeClass("active").css({ color: "lightskyblue" }).css({ color: "lightskyblue" });
    $(".oneTime3 p").removeClass("active").css({ color: "lightskyblue" }).css({ color: "lightskyblue" });
    $(".oneTime4 p").removeClass("active").css({ color: "lightskyblue" }).css({ color: "lightskyblue" });
  });
  $(".oneTime3 p").click(function () {
    $(this).addClass("active").css({ color: "white" });
    $(".oneTime1 p").removeClass("active").css({ color: "lightskyblue" }).css({ color: "lightskyblue" });
    $(".oneTime2 p").removeClass("active").css({ color: "lightskyblue" }).css({ color: "lightskyblue" });
    $(".oneTime4 p").removeClass("active").css({ color: "lightskyblue" }).css({ color: "lightskyblue" });
  });
  $(".oneTime4 p").click(function () {
    $(this).addClass("active").css({ color: "white" });
    $(".oneTime1 p").removeClass("active").css({ color: "lightskyblue" }).css({ color: "lightskyblue" });
    $(".oneTime2 p").removeClass("active").css({ color: "lightskyblue" }).css({ color: "lightskyblue" });
    $(".oneTime3 p").removeClass("active").css({ color: "lightskyblue" }).css({ color: "lightskyblue" });
  });
});