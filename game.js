var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

if (started === false) {
  $(document).on("keypress", nextSequence);
} else {
  $(document).off("keypress");
}

function nextSequence() {
  started = true;
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  addSound(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  level++;
  $("h1").html("level " + level);
}

function addSound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  addSound(userChosenColor);
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length);
});

function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function () {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(size) {
  if (userClickedPattern[size - 1] !== gamePattern[size - 1]) {
    addSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    level = 0;
    started = false;
    $("h1").html("Game Over, Press Any Key to Restart");
    gamePattern = [];
  } else {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  }
}
