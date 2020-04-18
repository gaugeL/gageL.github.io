//website started 2/20/2020

var bot = 0;
var player = 0;
var botChoice;
var choices = ['Rock', 'Paper', 'Scissors'];
function check() {
    if (bot == 3){
        write("GAME OVER, you suck dude you should get smrter than a comp bruh, like come on bro or lady ");
        player = 0;
        bot = 0;
    }
        else if (player == 3) {
        write("GAME OVER, Oh my goodness bruv you are a genious mastermind crazy insane derryl boii. Im proud of you dawg shouts out fron indonesia");
        player = 0;
        bot = 0;
    }
}
function restart() {
    bot = 0;
    player = 0;
    check()
    write("So you wanted a fresh start aye?");
    score("Choose one to start agane!!");
}
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

    }
    else {
        player++;
        write('You won, have a cookie');

    }
  
    score("Bot's score is " + bot + "         Your score is " + player);
    check();
}
function selectPaper() {
    botChoice = choices[randInt(0, 2)];

    if (botChoice == 'Paper') {
        write("You tied but I bet you can't tie your shoes ( ͡° ͜ʖ ͡°)");

    }
    else if (botChoice == choices[0]) {
        write('Nice job you won');
        player++;


    }
    else {
        write('You lost smh my head...');
        bot++;
    }

    score("Bot's score is " + bot + "         Your score is " + player);
    check();
}
function selectScissors() {
    botChoice = choices[randInt(0, 2)];

    if (botChoice == 'Scissors') {
        write('Tie boiii');
    }
    else if (botChoice == 'Rock') {
        write('You lost dummy');
        bot++;
    }
    else {
        write('You won');
        player++;
    }
    
    score("Bot's score is " + bot + "         Your score is " + player);
    check();
}





