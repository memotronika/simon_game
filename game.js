var gamePattern=[]
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gameStarted = false
var level = 0

function playSound(button){
    var audio = new Audio("sounds/"+button+".mp3")
    audio.volume = 0.1;
    audio.play();
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log('ok')
        if (userClickedPattern.length === gamePattern.length) {
            userClickedPattern=[]
            
            setTimeout(() => {
                nextSequence()
            }, 300);
        }
    } else {
        $('body').addClass('game-over')
        playSound('wrong')
        setTimeout(() => {
           $('body').removeClass('game-over')
           $('h1').html('Game over, your score is '+(level-1)+", press A key to restart") 
           level = 0
           userClickedPattern = []
           gamePattern = []

        }, 100);
    }
    
}

function animatePress(currentColour){
    $('#'+currentColour).addClass('pressed')
    setTimeout(() => {
        $('#'+currentColour).removeClass('pressed')
    }, 100);
}

function nextSequence() {
    level++
    $('h1').html('Level '+level)

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)
  }



     
  $(".btn").click(function() {
  
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1);
  });
  
  
$(document).keydown(function(event) {
    if (level === 0){
            if (event.key === "a" || event.key === "A") {
                gameStarted = true;
                nextSequence()}
            }})


      







