>In this project, you'll create a browser-based, word guessing game: "Phrase Hunter." You’ll use JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

>Using JavaScript, you’ll create two JavaScript classes with specific properties and methods. You'll create a Game class for managing the game, and a Phrase class to help with creating an array of Phrase objects.

>Your code will choose a random phrase, split the phrase into letters, and put those letters onto the gameboard.

>Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

>A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

>If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.

>A player can guess a letter only once. After they’ve guessed a letter, your programming will need to disable that letter on the onscreen keyboard.

###Project Instructions

1. Create 3 JavaScript files to hold the program's logic
- app.js to perform basic DOM selection, add event handlers, and to reset the game when it ends
- Phrase.js to create a Phrase class to handle the creation of phrases
- Game.js to create a Game class with methods for starting and ending the game, handling interactions, getting random phrases, checking for a win, and removing a life counter.
- Create the Phrase class in the Phrase.js file.
* Reviewer Comments:
* Great job ! You have a constructor which accepts a phrase, and have included addPhraseToDisplay to display a phrase, checkLetter function to check the letters and showMatchedLetter that reveals the letters on the board.

2. Create the Game class in the Game.js file.
* Reviewer Comments:
- Your game constructor includes missed and phrases properties. You also have the getRandomPhrase to pick a random phrase, a handleInteraction function to handle to check the selection, checkForWin to see if win/lose conditions are met and remove life function. Great work !

* Making the project your own
- The general layout should remain the same, but feel free to make the project your own by experimenting with things like color, background color, font, borders, shadows, transitions, animations and/or the exciting CSS filter property.
* Add good code comments
* Check for cross-browser consistency
* Extra Credit
* Add keyboard functionality
* Reviewer Comments:
* Awesome job setting the reset, utilizing the markButton resetting the display and the event listeners call the markButton.

* Reset the Game
* Reviewer Comments:
- Awesome job again, adding the reset buttons to the overlays for win/lose when the conditions are met.