// npm packeages 
var Word = require("./word.js");
var inquirer = require("inquirer");

// letters entry
var letterArray= "abcdefghijklmnopqrstuvwxyz";

// list of words to choose from
var randomWord = [
    // "simba",
    // "venom",
    "jeep",
    // "toyota",
    "github",
    // "gitlab",
    // "iphone",
    "samsung"
    // "mexico",
    // "salvador"


];

// picks random letter from randomWord array
var randomIndex = Math.floor(Math.random() * randomWord.length);
var randomWords= randomWord[randomIndex];

// pass word through constructor 
var computerWord = new Word(randomWords);

var requireNewWord = false;

// guess letter information 
var incorrectLetters = [];
var correctLetters = [];

// guesses let 
var guessesLeft= 12;

function data(){

    // generate word for constructor if true
    if(requireNewWord){
        // selects randomWord through constructor 
        var randomIndex = Math.floor(Math.random()* randomWord.length);
        var randomWords= randomWord(randomIndex);

        // passes word through Word consturctor 
        computerWord = new Word (randomWords);
        
        requireNewWord = false;

    }
// checking if the letter is guessed correctly 
var wordComplete = [];
computerWord.objArray.forEach(completeCheck);

if(wordComplete.includes (false)){
    inquirer 
        .prompt([
            {
                type:"input",
                message: "guess a letter between A-Z",
                name: "userinput"
            }
        ])
        .then(function(input){

        if(!letterArray.includes(input.userinput)|| input.userinput.length> 1) {
            console.log("\n try again!\n");
            data();
        
        } else{
            
        if(incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "") {
            console.log("\n guess again or enter something\n");
            data();

        } else {

            var checkWordArray = [];

            computerWord.userGuess(input.userinput);

            computerWord.objArray.forEach(wordCheck);

            if (checkWordArray.join('') === wordComplete.join('')) {
                console.log("\n wrong\n");

                incorrectLetters.push(input.userinput);
                guessesLeft--;
            } else {
                console.log("\n you did it, thats correct\n");
                
                correctLetters.push(input.userinput);
            }
            
            computerWord.log();
            //  gueses left
            console.log("guess left: " + guessesLeft + "\n");
            // letters guessed already
            console.log("Letters Guessed:" + incorrectLetters.join(" ") + "\n");

            if (guessesLeft>0) {

                data();
            } else {
                console.log ("sorry, game over\n");
                
                restartGame();
            }
        }
        
        function wordCheck(key) {
            checkWordArray.push(key.guessed);
        }
        }
    }
        );

} else {
console.log("YOU Won\n");

restartGame();

} 

function completeCheck(key) {
    wordComplete.push(key.guessed);

}


        
        function restartGame(){
            inquirer
            .prompt ([
               {
                type: "list",
                message: "Would you like to:",
                choices: ["Play Again", "Exit"],
                name: "restart"


               } 
            ])
            .then(function (input) {
                if (input.restart === "play Again") {
                    requireNewWord = true;
                    incorrectLetters = [];
                    correctLetters = [];
                    guessesLeft = 12;
                    data();
                } else {
                    return
                }
            })
        }
}
data(); 