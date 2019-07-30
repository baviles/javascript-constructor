// creating letter constructor
function Letter(value) {
    this.letter = value;
    
    this.guessed=false;

    // make string to determine spaces and blanks 
    this.letterString = function() {
        if(this.letter === " ") {
            this.guessed = true;
            return " ";
        }else{
            
            if(this.guessed === false) {
                return "_";
            }else{
            return this.letter;
            }
        }
    };
    
    this.guess = function(guess) {
        if(guess === this.letter) {
            this.guessed = true;
        }
    };
}
    // makingit work on word.js file
module.exports = Letter; 