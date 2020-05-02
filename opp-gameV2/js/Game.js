/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
     constructor(){
        this.missed = 0;
        this.phrases = [new Phrase('Hello World'),
                        new Phrase('I love javascript'),
                        new Phrase('My first program'),
                        new Phrase('Just do it'),
                        new Phrase('I will succeed')];
        this.activePrase = null;
     }

     startGame(){
        //get random phrase
        this.activePrase = this.getRandomPhrases();

        //hide overlay
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        
        this.activePrase.addPhraseToDisplay();
        console.log(this.activePrase);
     }

     getRandomPhrases(){
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
     }

     handleInteraction(event){ 
        const letter = event.textContent;
        //check letter return true or false;
        const match = this.activePrase.checkLetter(letter);
        
        //disabled button
        event.disabled = true;

        if(match){
            this.activePrase.showMatchedLetter(letter);
            this.checkForWin();
        } else {
            this.removeLife();
        }
     }

     removeLife(){
        const hearts = document.querySelectorAll('#scoreboard img');
        
        //remove last heart
        hearts[hearts.length - 1 - this.missed].src = 'images/lostHeart.png';
        this.missed++;
        //check if missed letters are more or equal than 5
        if(this.missed >= 5){ this.gameOver(); }
     }

     checkForWin(){
        //declared i, count
        let i, counter=0;

        //target all phrase letter
        const phraseLetter = document.querySelectorAll('#phrase .letter');

        //count how many letters are show
        for(i=0; i<phraseLetter.length; i++){
            if(phraseLetter[i].classList.contains('show')){counter++;}
        }

        if(i===counter){
            this.gameOver();
        }
     }

     gameOver(){
        //show ovarlay
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'flex';

        //change btn text
        overlay.querySelector('#btn__reset').textContent = 'TRY AGAIN';

        //message for win or lose
        if(this.missed >= 5){overlay.querySelector('#game-over-message').textContent = 'LOSE';}
        else {overlay.querySelector('#game-over-message').textContent = 'WIN';}
        this.resetGame();
     }

     resetGame(){
        //restart all hearts
        const hearts = document.querySelectorAll('#scoreboard img');
        hearts.forEach(el => {
            el.src = 'images/liveHeart.png';
        });

        //enable all keyboard buttons
        const buttons = document.querySelectorAll('#qwerty .key');
        buttons.forEach(el => {
            el.disabled = false;
        });

        //reset count
        this.missed = 0;
     }
 
 }