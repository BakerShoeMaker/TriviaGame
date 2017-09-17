var score = 0, correct = 0, wrong =0, time = 10;



var tQuestions = [
    {question: "What days do we attend class?",
        answers: {
            a:"Monday and Friday",
            b: "Monday and Thursday",
            c: "Sunday, Wednesday, and Saturday",
            d: "Tuesday, Thursday, and Saturday"
        },
        correctAnswer: "d"
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

}
//Make a basic progress bar for the time.
function progressBar(){

}
//***************** TIMER START ***********************
function myTimer(){
     setInterval(runTimer(), 3000);
}
function runTimer(){
    console.log("hello");
}
//***************** TIMER END ***********************

function loadPage(){

    //$("#quizSection").html("Let's get started");
    $("#ButtonID").click(function () {
        $(this).remove();
        startGame();
    });

};

function startGame(){
    //progressBar();
    myTimer();
    $("#Correct").html("Correct: " +correct);
    $("#Wrong").html("Wrong: " +wrong);
    $("#Time").html(+time);

    $("#Question").html(tQuestions[0].question);
    $("#A").html(tQuestions[0].answers.a);
    $("#B").html(tQuestions[0].answers.b);
    $("#C").html(tQuestions[0].answers.c);
    $("#D").html(tQuestions[0].answers.d);
}


//when page is loaded.
$(document).ready(function() {
    loadPage();
});