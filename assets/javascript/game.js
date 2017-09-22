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
    {question: "What languages have we learned so far?",
        answers: {
            a:"javascript",
            b: "actionscript",
            c: "c++",
            d: "python"
        },
        correctAnswer: "javascript"
    },
    {question: "Where is the $5.00 parking lot?",
        answers: {
            a:"On Wilshire and Bundy",
            b: "In the open air parking lot west of the classroom",
            c: "Next to Whole Foods",
            d: "Right next to Subway"
        },
        correctAnswer: "In the open air parking lot west of the classroom"
    },
    {question: "Which of the following is a function body in javascript?",
        answers: {
            a:"var(){  }",
            b: "function var()[  ]",
            c: "var function[  ]",
            d: "function(){  }"
        },
        correctAnswer: "function(){  }"
    },
    {question: "Pick the letter below that best describes how to declare a variable in javascript:",
        answers: {
            a:"var myVariable: ",
            b: "function var()[myVariable ]",
            c: "var myVariable",
            d: "var (myVariable)"
        },
        correctAnswer: "var myVariable"
    },
    {question: "The expression, 'var m = [a, b, c, d]' is best described as ",
        answers: {
            a:"a method function",
            b: "a method",
            c: "a static variable",
            d: "an array"
        },
        correctAnswer: "an array"
    },
    {question: "The following is example of a for loop",
        answers: {
            a:"for(i=0){//do something}",
            b: "for(var i=0; i<5; i++){//do something}",
            c: "for(i=0 ; [i]){//do something}",
            d: "function for(i=0){//do something}"
        },
        correctAnswer: "for(var i=0; i<5; i++){//do something}"
    },
    {question: "One of benefits of an API it that it allows",
        answers: {
            a:"developers to communicate methods easier.",
            b: "users to login quicker.",
            c: "backend developers to deploy websites",
            d: "communication between other websites."
        },
        correctAnswer: "communication between other websites."
    }
];

var score = 0, correct = 0, wrong =0, time = 15,
    questionCounter= 0; //counts the questions.
var numberOfProblems = tQuestions.length;
var problemsCompleted = 0;
var progressBarValue =  problemsCompleted/ numberOfProblems * 100 +"%";

var myTimer;
var answerArray = [];

//Using progressbarjs
// var semiCircle = new ProgressBar.SemiCircle('#ProgressBar', {
//     color: '#9ffc74',
//     duration: 15000,
//     trailColor: '#f4f4f4',
//     strokeWidth: 4
// }, function(){
// console.log("Progress bar is finished!");
// }
//
// );


//Resets all the variables.
function reset(){
    correct = 0;
    wrong = 0;
    answerArray = [];
}

function resetAnswerArray(){answerArray = [];}

//----------------- PROGRESS BAR JS SAMPLE ------------------------

//Make a basic progress bar for the time.
// function progressBar(){
//
//     semiCircle.animate(1);
//     //if(semiCircle.duration == 3){semiCircle.stop()}
// }
//console.log(semiCircle._duration);

//----------------- PROGRESS BAR JS SAMPLE END ------------------------

//Show results
function showResults(){
    $(".answer").html(""); //Clear the answers
    $("#MessageText").html("You have finished the quiz! Here are your results:"); //Show a message.
    $("#Question").html("Correct: " +correct + "<br>"
            + "Incorrect " +wrong + "<br>"
            + "% correct " + correct/(tQuestions.length -1)); // Show results.
    $("#submitbutton").html("<button type='button' class='buttonProperties'>Start Over</button>").click(function(){
        //Star over here. Add Again button so the user can take the quiz again.

    });
}

//***************** TIMER START ***********************
function preTimer() {
    myTimer = setInterval(function (){startTimer()}, 1000);
    startTimer();

}
function startTimer(){
        $("#Time").empty();
        time --;
        $("#Time").html(time);
        //Add off() for buttons and next button.

    if(time ==0){
        $("#Time").html("Time's up!");
        clearInterval(myTimer);

    }
}

function stopTimer(){
    clearInterval(myTimer);
}
//***************** TIMER END ***********************

function loadPage(){
    //$("#quizSection").html("Let's get started");
    $("#ButtonID").click(function () {
        $(this).remove();
        serveQuestion();
    });

};

//Check to see if the quiz has ended.
function checkIfFinished(){
    console.log("QC first in checkFinished: " +questionCounter);
    console.log("QC tQuestions: " +((tQuestions.length) -1));
    console.log("Question:" , tQuestions[questionCounter]);

    if(questionCounter == tQuestions.length){
    //if(questionCounter == ((tQuestions.length) -1)){
        console.log("Finished!");
        //show the results.
        // $("#time").empty();
        // $("#Correct").empty();
        // $("#Wrong").empty();
        // $("#MessageText").html("Total correct: " +correct +"<br>");
    }
    else{
        //show next question
        console.log("not finished yet!");
        stopTimer();
        questionCounter ++;
        serveQuestion();
        console.log("QC when not finished: "  +questionCounter);
        console.log("QC tQuestions: " +((tQuestions.length) -1));
    }
}

function checkAnswer(){
    problemsCompleted++;
    console.log(progressBarValue);
    $(".answer").off(); //turn off ability to click
    $(".answer").empty();
    $("#Time").empty();
    //if correct
    console.log("check answer");
    if(answerArray == tQuestions[questionCounter].correctAnswer){
        // console.log("What's in the answers array?: " +answerArray);
        console.log("Yes, you picked the right answer!");
        correct++;
        $("#MessageText").html("<i class= 'fa fa-thumbs-o-up messageTextWin' aria-hidden='true'></i>"+"  Yes, "
            +" ' " +tQuestions[questionCounter].correctAnswer +"' is correct!"); //add correct message
        $("#Correct").html("Correct: " +correct);
        $("#Wrong").html("Wrong: " +wrong);

        stopTimer();
        time = 15; //reset time
        //add next button for next question
        $("#SubmitButton").html("<button type='button' class='buttonProperties'>  Next </button>").click(function(){
            //Check to see if the bank of questions is finished.
            checkIfFinished();
            removeNextButton();
          });
    }
    else{
        //if incorrect (keep going)
        console.log("That's the wrong answer");
        $("#Time").html("");
        //add incorrect message
        $("#MessageText").html("<i class= 'fa fa-thumbs-o-down messageTextWin' aria-hidden='true'></i>" + "  Sorry" +
            " the answer is " +tQuestions[questionCounter].correctAnswer);
        wrong ++;
        $("#Correct").html("Correct: " +correct);
        $("#Wrong").html("Wrong: " +wrong);
        stopTimer();
        time = 10; //reset time
        //add next button and server next question
        $("#SubmitButton").html("<button type='button' class='buttonProperties'>  Next </button>").click(function(){
            console.log("You clicked the submit button!");
            console.log("The question counter is: " +questionCounter);
            //questionCounter++;
            checkIfFinished();
            removeNextButton();
        });

    }
}

function removeNextButton(){

    $("#SubmitButton").empty();
}
function updateProgressBar(){
    problemsCompleted++;
    progressBarValue =  problemsCompleted/ numberOfProblems * 100 +"%";

}
//Add submit button, push all clicks into an array, to check correct answer get the last item pushed into the array.

//Displays the questions/answers
function serveQuestion(){
    // console.log("------------ NEW QUESTION ------------  ")
    // console.log("FROM INSIDE THE SERVEQUESTION FUNCTION: Question counter =  " +questionCounter);
    // console.log("The length of the object is: " +tQuestions.length);
    // console.log("Current question: " +tQuestions[questionCounter].question );
    // console.log("Current answer: " +tQuestions[questionCounter].correctAnswer);
    // console.log("The progress bar value: " +progressBarValue);
    // console.log("Data type: " +typeof progressBarValue);

    resetAnswerArray();

    $("#Correct").html("Correct: " +correct);
    $("#Wrong").html("Wrong: " +wrong);
    updateProgressBar();
    $("#ProgressBar").html("<p class='percentComplete'>% Complete</p><br>"
        +"<div class='progress'> <div class='progress-bar bg-success' role= 'progressbar' "
        + "style= 'width:" + progressBarValue +"' aria-valuenow='25' aria-valuemin='0'" +
        "aria-valuemax='100'></div></div>");

    //'width:' +progressBarValue +'%'
    //'width:50%'

    $("#Question").html(tQuestions[questionCounter].question);
    $("#MessageText").html("");
    $("#A").click(function(){
        answerArray.push(tQuestions[questionCounter].answers.a);
        checkAnswer();
        }).html("<button class = 'answerButton '>" +"   " +tQuestions[questionCounter].answers.a) + "</button>";
    //<input type='radio' name='a' value='a'>" +"   " +tQuestions[questionCounter].answers.a) + "</input>

    $("#B").click( function () {
            answerArray.push(tQuestions[questionCounter].answers.b);
            checkAnswer();
    }).html("<buttton class = 'answerButton '>" +" " +tQuestions[questionCounter].answers.b) +"</button>";

    $("#C").click(function(){
        answerArray.push(tQuestions[questionCounter].answers.c);
        checkAnswer();
        }).html("<buttton class = 'answerButton '>" +" " +tQuestions[questionCounter].answers.c) +"</button>";

    $("#D").click(function () {
        answerArray.push(tQuestions[questionCounter].answers.d);
        checkAnswer();
        }).html("<buttton class = 'answerButton '>" +" " +tQuestions[questionCounter].answers.d) +"</button>"

    // $("#SubmitButton").html("<button type='button' class='buttonProperties'>  Submit </button>").click(function(){
    //     console.log("You clicked the submit button!");
    //     checkAnswer();
    // });

    preTimer();
}


//when page is loaded.
$(document).ready(function() {
    loadPage();
});