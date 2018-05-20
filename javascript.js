

var trivia = [{
    question: "Which character woke up from a coma after being shot?",
    a: "Carl Grimes", b: "Shane Walsh",c: "Daryl Dixon", d: "Rick Grimes",
    answer: "Rick Grimes"
},{
    question: "What state is the setting for the show?",
    a: "Georgia", b:"Ohio", c: "Florida", d:"Virginia",
    answer: "Georgia"
    
}, {
    question: "Who provided rick refuge in the very beginning and explained the zombie apocalypse to him?",
    a: "Shane", b:"Morgan", c: "Lori", d:"Maggie",
    answer: "Morgan"
}, {
    question: "What was Morgan's sons name?",
    a: "Carl", b:"Dwight", c: "Beth", d:"Duane",
    answer: "Duane"
}
];
var countDown = 30;
var userCorrectAnswers = 0;
var userWrongAnswers = 0;
var correctAnswer = "";
var questionNumber = 0;

$(document).ready(function(){
    $("#questionPage").hide();

$("#startGame").on("click", function (){
  questionNumber ++;
    $("#questionPage").show();
    $("#mainPageCard").hide();
    displayQuestionsAnswers(trivia[questionNumber].question,trivia[questionNumber].a,trivia[questionNumber].b,trivia[questionNumber].c,trivia[questionNumber].d, trivia[questionNumber].answer);
    countDownTimer();
  
    
    
    $(".answerButtons").on("click",function (){
        
   
      var userAnswer = $(this).text();
      if(userAnswer === correctAnswer){
          userCorrectAnswers++;

      }
    

    })
})
});
// 30 second count down timer for each question
function countDownTimer(){
    setInterval(function(){
    if (0<countDown){
         countDown--;
       
        
        $("#countDownTimerId").html("Time Remaining " + countDown);
    }

},1000);

}



function displayQuestionsAnswers(question, answer1, answer2, answer3, answer4, correct) {
$("#questionId").html(question);
$("#answer1Id").html(answer1);
$("#answer2Id").html(answer2);
$("#answer3Id").html(answer3);
$("#answer4Id").html(answer4);
correctAnswer = correct;

};



 

/*
    function selectAnswer(){
$(".answerButtons").on("click", )
var userAnswer = $(this);

if(userAnswer === correctAnswer) {
    alert("correct answer");
    userCorrectAnswers ++;
}
else {
    alert("The correct answer was " + correctAnswer);
    userWrongAnswers --;
}

    };

*/
  