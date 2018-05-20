

var trivia = [{
    question: "Which character woke up from a coma after being shot?",
    a: "Carl Grimes", b: "Shane Walsh",c: "Daryl Dixon", d: "Rick Grimes",
    answer: "d"
},{
    question: "What state is the setting for the show?",
    a: "Georgia", b:"Ohio", c: "Florida", d:"Virginia",
    answer: "a"
    
}, {
    question: "Who provided rick refuge in the very beginning and explained the zombie apocalypse to him?",
    a: "Shane", b:"Morgan", c: "Lori", d:"Maggie",
    answer: "b"
}, {
    question: "What was Morgan's sons name?",
    a: "Carl", b:"Dwight", c: "Beth", d:"Duane",
    answer: "d"
}
];
var countDown = 30;

$(document).ready(function(){
    $("#questionPage").hide();

$("#startGame").on("click", function (){
  
    $("#questionPage").show();
    $("#mainPageCard").hide();
    displayQuestionsAnswers(trivia[0].question,trivia[0].a,trivia[0].b,trivia[0].c,trivia[0].d)
    countDownTimer();



})
});
// 30 second count down timer for each question
function countDownTimer(){
    setInterval(function(){
    if (0<countDown){
         countDown--;
       
        console.log(countDown);
        $("#countDownTimerId").html("Time Remaining " + countDown);
    }

},1000);

}



function displayQuestionsAnswers(question, answer1, answer2, answer3, answer4) {
$("#questionId").html(question);
$("#answer1Id").html(answer1);
$("#answer2Id").html(answer2);
$("#answer3Id").html(answer3);
$("#answer4Id").html(answer4);
};


 
  console.log(trivia[0].question);
