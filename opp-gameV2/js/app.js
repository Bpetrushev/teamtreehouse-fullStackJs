/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const giveKeysClassFromTextContent = () => {
    const buttons = document.querySelectorAll('#qwerty .key');
    buttons.forEach(el => {
        const value = el.textContent;
        el.classList.add(value);
    });
};

giveKeysClassFromTextContent();
let game;

//add eventlistener to start game
document.querySelector('#btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

//add eventlistener for click
document.querySelector('#qwerty').addEventListener('click', (e) => {
    if(e.target.classList.contains('key')){
        game.handleInteraction(e.target);
    }
});


//add eventlistener for keyboard
document.body.addEventListener('keyup', (e) => {
    if(document.querySelector('#overlay').style.display === 'none'){
        const key = e.key;
        const patt = /[a-z]/;
        if(patt.test(key)){
            const el = document.querySelector(`.key.${key}`);
            if(el !== null){
                game.handleInteraction(el);
            }
        }
    }
});