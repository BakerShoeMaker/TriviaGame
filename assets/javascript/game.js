var score = 0, correct = 0, wrong =0, time = 10,
    questionCounter= 0; //counts the questions.



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

    $("#Question").html(tQuestions[questionCounter].question);
    $("#A").html("<input type='radio' name='a' value='a'>" +"   " +tQuestions[questionCounter].answers.a) + "</input>";
    $("#B").html("<input type = 'radio' name='b' value ='b'>" +"   " +tQuestions[questionCounter].answers.b)+ "</input>";
    $("#C").html("<input type = 'radio' name='c' value ='c'>" +"   " +tQuestions[questionCounter].answers.c) +"</input>";
    $("#D").html("<input type = 'radio' name='d' value ='d'>" +"   " +tQuestions[questionCounter].answers.d)+"</input>";
}


//when page is loaded.
$(document).ready(function() {
    loadPage();
});