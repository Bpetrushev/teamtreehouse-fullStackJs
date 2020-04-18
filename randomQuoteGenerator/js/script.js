/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: 'Marilyn Monroe'
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: 'Oscar Wilde'
  },
  {
    quote: "So many books, so little time.",
    author: 'Frank Zappa'
  },
  {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: 'Bernard M. Baruch'
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: 'Marcus Tullius Cicero'
  },
  {
    quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: 'William W. Purkey'
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: 'Dr. Seuss'
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: 'Mae West'
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: 'Mahatma Gandhi'
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: 'Robert Frost'
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length+1);
  return arr[randomNumber];
}


/***
 * `printQuote` function
 ***/
function randomBackgroundColor(){
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256); 
  document.body.style.backgroundColor = `RGB(${x},${y},${z})`;
}

function printQuote(){
  
  const randomQuote = getRandomQuote(quotes);
  const quote = document.querySelector('.quote');
  const source = document.querySelector('.source');
  const citation = document.querySelector('.citation');
  const year = document.querySelector('.year');
  randomBackgroundColor();
  quote.textContent = randomQuote.quote;
  source.textContent = randomQuote.author;
}

const timer = setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);