/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        const sectionPhrase = document.querySelector('#phrase');
        document.querySelector('#phrase ul').remove();
        const ul = document.createElement('ul');

        //generate innerHTML for ul element
        for(let i=0; i<this.phrase.length; i++){
            const el = this.phrase[i];
            ul.innerHTML += `<li class="${el ===" " ? 'space' : 'hide letter'} ${el}">${el}</li>`;
        }

        sectionPhrase.append(ul);

    }

    //check that letter in string and return TRUE | FALSE
    checkLetter(letter){
        return this.phrase.includes(letter);
    }

    //show letter in phrase
    showMatchedLetter(letter){
        const allLetters=document.querySelectorAll('#phrase li');
        for (let i=0; i<allLetters.length; i++){
            if (allLetters[i].textContent===letter){
                allLetters[i].classList.remove('hide');
                allLetters[i].classList.add('show');
            }
        }
    }
 }