// getting NPM package 
var Letter = require("./letter.js");

function Word(answer) {
    this.objArray= [];

    // will create a letter variable 
    for (var i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        // push it to the object array 
        this.objArray.push(letter); 
    }
    
    // display the data in the terminal 
    this.log = function(){
        var answerLog = ""; 
        for (var i = 0; i < this.objArray.length; i++) {
            answerLog += this.objArray[i].letterString() + " ";
            
        }
        console.log(answerLog + "\n");
    };
    this.userGuess = function(input){
        for (var i = 0; i < this.objArray.length; i++) {
            this.objArray[i].guess(input);
            
        }
    };
}
module.exports = Word;