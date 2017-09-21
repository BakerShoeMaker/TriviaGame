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
            a:"var(){}",
            b: "function var()[]",
            c: "var function[]",
            d: "function(){}"
        },
        correctAnswer: "function(){}"
    }
];

var score = 0, correct = 0, wrong =0, time = 10,
    questionCounter= 0; //counts the questions.
var numberOfProblems = tQuestions.length;
//var progressBarValue = questionCounter / numberOfProblems;
var progressBarValue = (.75 * 100) +"%";
var myTimer;
var answerArray = [];

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
        questionCounter = questionCounter +1;
        serveQuestion();
        console.log("QC when not finished: "  +questionCounter);
        console.log("QC tQuestions: " +((tQuestions.length) -1));
    }
}

function checkAnswer(){
    $(".answer").off(); //turn off ability to click
    $(".answer").empty();
    $("#Time").empty();
    //if correct
    if(answerArray == tQuestions[questionCounter].correctAnswer){
        // console.log("What's in the answers array?: " +answerArray);
        // console.log("Yes, you picked the right answer!");
        correct++;
        $("#MessageText").html("<i class= 'fa fa-thumbs-o-up messageTextWin' aria-hidden='true'></i>"+"  Yes, "
            +" ' " +tQuestions[questionCounter].correctAnswer +"' is correct!"); //add correct message
        $("#Correct").html("Correct: " +correct);
        $("#Wrong").html("Wrong: " +wrong);

        stopTimer();
        time = 10; //reset time
        //add next button for next question
        $("#SubmitButton").html("<button type='button' class='buttonProperties'>  Next </button>").click(function(){
            //Check to see if the bank of questions is finished.
            checkIfFinished();
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
            //serveQuestion();
            checkIfFinished();
        });

    }
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
    $("#ProgressBar").html("<p class='percentComplete'>% Complete</p><br>"
        +"<div class='progress'> <div class='progress-bar bg-success' role= 'progressbar' "
        + "style= 'width: 50%' aria-valuenow='25' aria-valuemin='0'" +
        "aria-valuemax='100'></div></div>")

    //'width:' +progressBarValue +'%'
    //'width:50%'

    $("#Question").html(tQuestions[questionCounter].question);
    $("#MessageText").html("");
    $("#A").click(function(){
        answerArray.push(tQuestions[questionCounter].answers.a);
        checkAnswer();
        }).html("<button class = 'answerButton'>" +"   " +tQuestions[questionCounter].answers.a) + "</button>";
    //<input type='radio' name='a' value='a'>" +"   " +tQuestions[questionCounter].answers.a) + "</input>

    $("#B").click( function () {
            answerArray.push(tQuestions[questionCounter].answers.b);
            checkAnswer();
    }).html("<buttton class = 'answerButton'>" +" " +tQuestions[questionCounter].answers.b) +"</button>";

    $("#C").click(function(){
        answerArray.push(tQuestions[questionCounter].answers.c);
        checkAnswer();
        }).html("<buttton class = 'answerButton'>" +" " +tQuestions[questionCounter].answers.c) +"</button>";

    $("#D").click(function () {
        answerArray.push(tQuestions[questionCounter].answers.d);
        checkAnswer();
        }).html("<buttton class = 'answerButton'>" +" " +tQuestions[questionCounter].answers.d) +"</button>"

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