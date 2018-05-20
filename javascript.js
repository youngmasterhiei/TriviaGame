



var countDown = 30;

$(document).ready(function(){
    $("#questionPage").hide();

$("#startGame").on("click", function (){
  
    $("#questionPage").show();
    $("#mainPageCard").hide();
   
    
    
    countDownTimer();


})
});

function countDownTimer(){
    setInterval(function(){
    if (0<countDown){
         countDown--;
       
        console.log(countDown);
        $("#countDownTimerId").html("Time Remaining" + countDown);
    }

},1000);

}




