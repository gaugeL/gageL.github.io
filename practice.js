//website started 2/20/2020

var bot = 0;
var player = 0;
function score(text) {
    document.getElementById("score").innerHTML = text;
}
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function write(text) {
    document.getElementById("body").innerHTML = text;
}
function selectRock() {
    botChoice = choices[randInt(0, 2)];

    if (botChoice == 'Rock') {
        write('tie boiiii try again');
    }
    else if (botChoice == choices[1]) {
        bot++;
        write('You lost deryl');
        score('Your score' player)
    }
    else {
        player++;
        write('You won, have a cookie');
    }
}
function selectPaper() {
    botChoice = choices[randInt(0, 2)];

    if (botChoice == 'Paper') {
        write("You tied but I bet you can't tie your shoes ( ͡° ͜ʖ ͡°)");
    }
    else if (botChoice == choices[0]) {
        write('Nice job you won');
    }
    else {
        write('You lost smh my head...');
    }
}
function selectScissors() {
    botChoice = choices[randInt(0, 2)];

    if (botChoice == 'Scissors') {
        write('Tie boiii');
    }
    else if (botChoice == 'Rock') {
        write('You lost dummy');
    }
    else write('You won')
}



var botChoice;
var choices = ['Rock', 'Paper', 'Scissors'];

