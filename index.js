// Variables ********************
var btnColors = ["red", "blue", "green", "yellow"];
var colorSequence = [];
var userSequence = [];
var level = 0;

// nextSequence
function nextSequence() {
    var num = Math.floor(Math.random() * 4);
    var randomColor = btnColors[num];
    makeSound(randomColor);
    colorSequence.push(randomColor);
    $("#" + randomColor).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
    level++;
    $("h1").text("Level " + level);
}

// makeSound
function makeSound(id) {
    var audioRed = new Audio("./sounds/" + id + ".mp3");
    audioRed.play();
};

// checkAnswer
function checkAnswer(lvl) {
    if (userSequence[lvl] === colorSequence[lvl]) {
        if (userSequence.length === colorSequence.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000)
            userSequence = [];
        }
    } else {
        $("h1").text("Game Over!!! Tap HERE to Restart");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        makeSound("wrong");
        startOver();
    };
};

function startOver() {
    userSequence = [];
    colorSequence = [];
    level = [];
}

// User Click
$(".btn").click(function () {
    var clickedColor = this.id;
    userSequence.push(clickedColor);
    makeSound(clickedColor);
    $("#" + clickedColor).addClass("pressed");
    setTimeout(function () {
        $("#" + clickedColor).removeClass("pressed");
    }, 100)
    checkAnswer(userSequence.length - 1);
});

// Game Start
// $(document).keypress(function () {
//     nextSequence();
//     $("h1").text("Level " + level);
// });
// mobile
$("h1").click(function () {
    nextSequence();
    $("h1").text("Level " + level);
});