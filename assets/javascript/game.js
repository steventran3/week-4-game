$(document).ready(function(){

// initially hides story element on html
$("#story").hide();


var numberToGuess = Math.floor(Math.random() * (101)) + 19;
$('#number-to-guess').text(numberToGuess);
var buttonGen;
var gemsArr = [];
var winCounter = 0;
var lossCounter = 0;

for (var i = 0; i < 4; i++) {
	buttonGen = Math.floor(Math.random() * (11)) + 1;
	gemsArr.push(buttonGen);
	//console.log(gemsArr);
}
console.log(gemsArr);

function isEven(num) {
    return num % 2 == 0;
}

var yourScore = 0;
$("#display").text(yourScore);


var blueGem = $("#blue-gem");
blueGem.attr("data-gem", gemsArr[0]);

var clearGem = $("#clear-gem");
clearGem.attr("data-gem", gemsArr[1]);

var redGem = $("#red-gem");
redGem.attr("data-gem", gemsArr[2]);

var greenGem = $("#green-gem");
greenGem.attr("data-gem", gemsArr[3]);

function reset() {
    numberToGuess = Math.floor(Math.random() * (101)) + 19;
    $('#number-to-guess').text(numberToGuess);

    gemsArr = [];
    for (var i = 0; i < 4; i++) {
    buttonGen = Math.floor(Math.random() * (11)) + 1;
    gemsArr.push(buttonGen);
    //console.log(gemsArr);
    }
    console.log(gemsArr);
    yourScore = 0;
    $("#display").text(yourScore);

    // Assigns the values of the gems
    blueGem = $("#blue-gem");
    blueGem.attr("data-gem", gemsArr[0]);

    clearGem = $("#clear-gem");
    clearGem.attr("data-gem", gemsArr[1]);

    redGem = $("#red-gem");
    redGem.attr("data-gem", gemsArr[2]);

    greenGem = $("#green-gem");
    greenGem.attr("data-gem", gemsArr[3]);
}


function start() {
    $("#blue-gem").on("click", function() {
        yourScore = yourScore + parseInt(blueGem.attr("data-gem"));
        $("#display").text(yourScore);
        console.log(blueGem.attr("data-gem"));
    });

    $("#clear-gem").on("click", function() {
        yourScore = yourScore + parseInt(clearGem.attr("data-gem"));
        $("#display").text(yourScore);
        console.log(clearGem.attr("data-gem"));
    });

    $("#red-gem").on("click", function() {
        yourScore = yourScore + parseInt(redGem.attr("data-gem"));
        $("#display").text(yourScore);
        console.log(redGem.attr("data-gem"));
    });

    $("#green-gem").on("click", function() {
        yourScore = yourScore + parseInt(greenGem.attr("data-gem"));
        $("#display").text(yourScore);
        console.log(greenGem.attr("data-gem"));
    });


    $(".gem-buttons").on("click", function() {    
        if (yourScore > numberToGuess) {
            console.log("your score has passed the number you're guessing.");
            lossCounter++;
            // checks if losses is even
            if (isEven(lossCounter)){
                $("#result").text("Sorry! you took too many!");
            } else {
                $("#result").text("You got too greedy");
            }
            $("#losses").text(lossCounter);
            $("#instructions").hide();
            $("#story").show();

            
            reset();
        } else if (yourScore === numberToGuess){
            console.log("your score is equal to the number you're guessing.");
            winCounter++;
            // checks if wins is even
            if (isEven(winCounter)){
                $("#result").text("Congrats!! you did it!");
                } else {
                $("#result").text("Congrats!! you did it!");
            }
            $("#wins").text(winCounter);
            $("#instructions").hide();
            $("#story").show();
            reset();
        }
    })
}

start();

});