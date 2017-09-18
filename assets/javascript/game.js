var score = 0, correct = 0, wrong =0, time = 10,
    questionCounter= 0; //counts the questions.
var myTimer;
var answerArray = [];

var tQuestions = [
    {question: "What days do we attend class?",
        answers: {
            a:"Monday and Friday",
            b: "Monday and Thursday",
            c: "Sunday, Wednesday, and Saturday",
            d: "Tuesday, Thursday, and Saturday"
        },
        correctAnswer: "Tuesday, Thursday, and Saturday"
        //correctAnswer: tQuestions[0].answers
    },
    {question: "What languages have we learned so far",
        answers: {
            a:"javascript",
            b: "actionscript",
            c: "c++",
            d: "python"
        },
        correctAnswer: "a"
    },
    {question: "Where is the $5.00 parking lot?",
        answers: {
            a:"On Wilshire and Bundy",
            b: "In the open air parking lot west of the classroom",
            c: "Next to Whole Foods",
            d: "Right next to Subway"
        },
        correctAnswer: "b"
    }
];

//Resets all the variables.
function reset(){
    correct = 0;
    wrong = 0;
    answerArray = [];
}

function resetAnswerArray(){answerArray = [];}


//Make a basic progress bar for the time.
function progressBar(){

}
//***************** TIMER START ***********************
function preTimer() {
    myTimer = setInterval(function (){startTimer()}, 1000);
    startTimer();

}
function startTimer(){
        time --;
        $("#Time").html(time);

    if(time ==0){
        clearInterval(myTimer);

    }
}

//***************** TIMER END ***********************

function loadPage(){

    //$("#quizSection").html("Let's get started");
    $("#ButtonID").click(function () {
        $(this).remove();
        serveQuestion();
    });

};

function checkAnswer(){
    $(".answer").off(); //turn off ability to click
    questionCounter ++ // add questionCounter.
    //if correct
    if(answerArray == tQuestions[questionCounter].correctAnswer){
        console.log("Yes, you picked the right answer!");
        $(".answer").html("");//Clear the answer fields
        $("#MessageSection").html("Yes, that's correct!"); //add correct message
        //add next button for next question
    }
    else{
        //if incorrect (keep going)
        console.log("That's the wrong answer");
        //add inccorrect message
        //add next button for next question
                //serveQuestion(); after button is clicked.
    }



}

//Add submit buttton, push all clicks into an array, to check corrrect answer get the last item pushed into the array.

//Displays the questions/answers
function serveQuestion(){
    //progressBar();

    $("#Correct").html("Correct: " +correct);
    $("#Wrong").html("Wrong: " +wrong);
    $("#Question").html(tQuestions[questionCounter].question);

    $("#A").click(function(){
        answerArray.push(tQuestions[questionCounter].answers.a);
        checkAnswer();
        }).html("<input type='radio' name='a' value='a'>" +"   " +tQuestions[questionCounter].answers.a) + "</input>";

    $("#B").click( function () {
            answerArray.push(tQuestions[questionCounter].answers.b);
            checkAnswer();
    }
    ).html("<input type = 'radio' name='b' value ='b'>" +"   " +tQuestions[questionCounter].answers.b)+ "</input>";

    $("#C").click(function(){
        answerArray.push(tQuestions[questionCounter].answers.c);
        checkAnswer();
        }).html("<input type = 'radio' name='c' value ='c'>" +"   " +tQuestions[questionCounter].answers.c) +"</input>";

    $("#D").click(function () {
        answerArray.push(tQuestions[questionCounter].answers.d);
        checkAnswer();
        }).html("<input type = 'radio' name='d' value ='d'>" +"   " +tQuestions[questionCounter].answers.d)+"</input>";
    preTimer();
}


//when page is loaded.
$(document).ready(function() {
    loadPage();
});