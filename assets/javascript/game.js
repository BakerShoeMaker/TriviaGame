console.log("Hello World");

function loadPage(){


    //$("#correct").html("Correct");
    //$("#wrong").html("Wrong: ");
    //$("#time").html("2:00");

    //$("#quizSection").html("Let's get started");
    $("#buttonID").click(function () {
        $(this).remove();
        startGame();
    });

}

function startGame(){
alert("hello!");


}

//when page is loaded.
$(document).ready(function () {
    loadPage();
}