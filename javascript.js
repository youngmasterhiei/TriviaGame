

var trivia = [{
    question: "Which character woke up from a coma after being shot?",
    a: "Carl Grimes", b: "Shane Walsh", c: "Daryl Dixon", d: "Rick Grimes",
    answer: "Rick Grimes",
    image: "images/rickwakingup.gif"
}, {
    question: "What state is the setting for the show?",
    a: "Georgia", b: "Ohio", c: "Florida", d: "Virginia",
    answer: "Georgia",
    image: "images/atlantageorgia.jpg"

}, {
    question: "Who provided rick refuge in the very beginning and explained the zombie apocalypse to him?",
    a: "Shane", b: "Morgan", c: "Lori", d: "Maggie",
    answer: "Morgan",
    image: "images/morgan.gif"

}, {
    question: "What was Morgan's sons name?",
    a: "Carl", b: "Dwight", c: "Beth", d: "Duane",
    answer: "Duane",
    image: "images/duane.jpg"
}, {
    question: "Which Character gets trapped in the tank in atlanta?",
    a: "Shane", b: "Rick", c: "Lori", d: "Maggie",
    answer: "Rick",
    image: "images/rickintank.gif"
}, {
    question: "Who rescued rick from the tank in atlanta?",
    a: "Andrea", b: "Morgan", c: "Lori", d: "Glen",
    answer: "Glen",
    image: "images/glentank.gif"
}, {
    question: "What job did Glen have before the apocalypse?",
    a: "Pizza Delivery", b: "Valet", c: "Dunder Mifflen Textiles", d: "Programmer",
    answer: "Pizza Delivery",
    image: "images/glendriving.webp"

}, {
    question: "Who was Rick Grimes's best friend before the apocalypse?",
    a: " Michonne", b: "Negan", c: "Shane", d: "Maggie",
    answer: "Shane",
    image: "images/shaneandrick.gif"
}, {
    question: "Who was left handcuffed on the rooftop in atlanta?",
    a: " Michonne", b: "Glenn", c: "Meryl", d: "Andrea",
    answer: "Meryl",
    image: "images/merylrooftop.jpg"
}, {
    question: "Who is ricks wife?",
    a: " Michonne", b: "Andrea", c: "Maggie", d: "Lori",
    answer: "Lori",
    images: "images/rickandlori.gif"
}
];

$(document).ready(function () {

//time clock start
var countDown = 11;
var userCorrectAnswers = 0;  //counter for correct answers
var userWrongAnswers = 0;    //counter for wrong answers
var correctAnswer = "";     //used to check users answer
var questionNumber = 0;     //used to cycle the next question 
var stopVar = "";
var userAnswer = "";
var gameOver = false;

    $("#endgameStats").hide();
    $("#questionPage").hide();         // hides question screen before start is clicked
    
    $("#startGame").on("click", function () {       // start game button
        countDownTimer();
        $("#questionPage").show();         // shows first question 
        $("#mainPageCard").hide();         // hides intro screen after start is clicked 
        // my pride and joy function. surprisingly i did this without googles help at all. displays question and cycles throuhg using question number++
        displayQuestionsAnswers(trivia[questionNumber].question, trivia[questionNumber].a, trivia[questionNumber].b, trivia[questionNumber].c, trivia[questionNumber].d, trivia[questionNumber].answer);
       
     

    });
        // button listener for answers
        $(".answerButtons").on("click", function () {

            // verifies user answer to to objects answer/question answer
            userAnswer = $(this).text();

            if (userAnswer === correctAnswer) {
                userCorrectAnswers++;
                window.clearInterval(stopVar);
                $("#questionPage").hide(); //hides question page     
                $("#displayCorrectAnswer").show();      //shows hidden div that holds the correct answer pictures or gifs         
                showCorrectAnswer(); //function to insert correct answer and images/gifs
                questionNumber++;    // needed to cycle the questions and images/gifs  

                setTimeout(function () {
                    $("#questionPage").show();
                    $("#displayCorrectAnswer").hide();
                    if (questionNumber === 2) {
                        endGame();
                    }
                    else {
                        displayQuestionsAnswers(trivia[questionNumber].question, trivia[questionNumber].a, trivia[questionNumber].b, trivia[questionNumber].c, trivia[questionNumber].d, trivia[questionNumber].answer);
                        countDownTimer();
                    }
                }, 4000);


                updateStats();


            }

            else {
                window.clearInterval(stopVar);
                $("#questionPage").hide(); //hides question page     
                $("#displayCorrectAnswer").show();      //shows hidden div that holds the correct answer pictures or gifs         
                showCorrectAnswer(); //function to insert correct answer and images/gifs
                questionNumber++;    // needed to cycle the questions and images/gifs  

                setTimeout(function () {
                    $("#questionPage").show();
                    $("#displayCorrectAnswer").hide();
                    if (questionNumber === 2) {
                        endGame();
                    }
                    else {
                        displayQuestionsAnswers(trivia[questionNumber].question, trivia[questionNumber].a, trivia[questionNumber].b, trivia[questionNumber].c, trivia[questionNumber].d, trivia[questionNumber].answer);
                        countDownTimer();
                    }
                }, 4000);



                userWrongAnswers++;
                updateStats();

            }

        });
        $("#restartGame").on("click", function(){
            
                        restartGame();
                        $("#mainPageCard").show();         // hides intro screen after start is clicked 
                        $("#endgameStats").hide();
                  });
   

// 30 second count down timer for each question

function countDownTimer() {
    stopVar = setInterval(function () {

        if (1 < countDown) {
            countDown--;

            $("#countDownTimerId").html("Time Remaining " + countDown);
        }
        else if (countDown === 1) {
            window.clearInterval(stopVar);
            $("#questionPage").hide(); //hides question page     
            $("#displayCorrectAnswer").show();      //shows hidden div that holds the correct answer pictures or gifs         
            showCorrectAnswer(); //function to insert correct answer and images/gifs
            questionNumber++;    // needed to cycle the questions and images/gifs  

            setTimeout(function () {
                $("#questionPage").show();
                $("#displayCorrectAnswer").hide();
                if (questionNumber === 2) {
                    endGame();
                }
                else {
                    displayQuestionsAnswers(trivia[questionNumber].question, trivia[questionNumber].a, trivia[questionNumber].b, trivia[questionNumber].c, trivia[questionNumber].d, trivia[questionNumber].answer);
                    countDownTimer();
                }
            }, 4000);
            userWrongAnswers++;
            updateStats();
            endGame();
        }



    }, 1000);

}


// drys up the code displays the questions, answers and holds correct answer
function displayQuestionsAnswers(question, answer1, answer2, answer3, answer4, correct) {

    $("#questionId").html(question);
    $("#answer1Id").html(answer1);
    $("#answer2Id").html(answer2);
    $("#answer3Id").html(answer3);
    $("#answer4Id").html(answer4);
    correctAnswer = correct;




};



function showCorrectAnswer() {
    if (userAnswer === correctAnswer) {
        $("#correctAnswerText").html("You chose the correct answer: " + correctAnswer);
    }
    else if (countDown === 1) {
        $("#correctAnswerText").html("Times up. The correct answer is: " + correctAnswer);
    }
    else {
        $("#correctAnswerText").html("You chose an incorrect answer. The correct answer is: " + correctAnswer);

    }

    // my code from the hangman game, takes image from the object and puts it into the correct answer div
    var img = document.createElement("img");
    img.style.width = "600px";
    img.style.height = "450px";
    img.setAttribute("src", trivia[questionNumber].image);

    var div = document.getElementById("correctAnswerImg");
    div.innerHTML = '';
    div.appendChild(img);




};



function updateStats() {
    $(".stats").html("Correct questions answered: " + userCorrectAnswers + "\n Incorrect questions answered: " + userWrongAnswers);
    countDown = 11;




};

function endGame() {

    $("#questionPage").hide();
    $("#endgameStats").show();
    // debugger;
    $("#statPageHeader").html("Correct questions answered: " + userCorrectAnswers + " Incorrect questions answered: " + userWrongAnswers + "\n Total questions: " + (questionNumber - 1));
    window.clearInterval(stopVar);

};

function restartGame() {
 userCorrectAnswers = 0;  //counter for correct answers
 userWrongAnswers = 0;    //counter for wrong answers
 questionNumber = 0; 
 updateStats();


};

});