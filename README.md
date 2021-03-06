# javascript-constructor

Advanced JavaScript Assignment: Constructor Hangman

Game receives user input using the inquirer npm package.

•	Letter.js: Contains a constructor, Letter. This constructor is able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This constructor defines:
o	A string value to store the underlying character for the letter
o	A boolean value that stores whether that letter has been guessed yet
o	A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
o	A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

•	Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. Word constructor defines:
o	An array of new Letter objects representing the letters of the underlying word
o	A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
o	A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

•	index.js: The file containing the logic for the course of the game, which depends on Word.js and:
o	Randomly selects a word and uses the Word constructor to store it
o	Prompts the user for each guess and keeps track of the user's remaining guesses
2.	Letter.js does not require any other files.
3.	Word.js only requires Letter.js.

# screenshot of the javascript constructor Hangman game

<img width="897" alt="Screen Shot 2019-07-30 at 6 38 26 PM" src="https://user-images.githubusercontent.com/47234767/62175309-779f2f80-b2fa-11e9-90e0-a561ee4a20ba.png">

<img width="531" alt="Screen Shot 2019-07-30 at 6 38 57 PM" src="https://user-images.githubusercontent.com/47234767/62175317-84bc1e80-b2fa-11e9-934e-23b1b377603f.png">

<img width="531" alt="Screen Shot 2019-07-30 at 6 39 23 PM" src="https://user-images.githubusercontent.com/47234767/62175319-8ab1ff80-b2fa-11e9-91a7-61a6a9f29889.png">
