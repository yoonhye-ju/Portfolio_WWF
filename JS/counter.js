$(function(){
  let counter=782000;
  counterSpeed();
  function counterSpeed(){
    counterbox=setInterval(countMax, 1);

    function countMax(){
      counter++;
      if (counter>784016){
        clearInterval(counterbox);
      } else{
        $(".countBox1 h3").text(counter);
      }
    }
  }
});

$(function(){
  let counter=128000;
  counterSpeed();
  function counterSpeed(){
    counterbox=setInterval(counterMax, 1);
    
    function counterMax(){
      counter++;
      if(counter>130000){
        clearInterval(counterbox);
      } else{
        $(".countBox2 h3").text(counter);
      }
    }
  }
});

$(function(){
  let counter = 882000;
  counterSpeed();
  function counterSpeed(){
    counterbox=setInterval(countMax, 1);

    function countMax(){
      counter++;
      if(counter>884042){
        clearInterval(counterbox);
      }else{
        $(".countBox3 h3").text(counter);
      }
    }
  }
});

$(function() {
  let counter = 0;
  counterSpeed();
  function counterSpeed(){
    counterbox = setInterval(counterMax, 1);
    
    function counterMax(){
      counter++;
      if(counter>1300){
        clearInterval(counterbox);
      }else{
        $(".countBox4 h3").text(counter);
      }
    }
  }
});
