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
let quotes = [
  {
    quote1: "There's no crying in baseball!",
    source1: "Jimmy Dugan",
    citation1: "A Leage of Their Own"
  },
  {
    quote2: 'You sit on a throne of lies',
    source2: 'Buddy the elf',
    year2: '2003'
  },
  {
    quote3: "Show me the money!",
    source3: "Rod Tidwell",
    citation3: "Jerry Maguire"
  },
  {
    quote4: "I'm not like a regular mom, I'm a cool mom.",
    source4: "Mrs. George",
    citation4:"Mean Girls"
  },
  {
    quote5: "It's not a man purse. It's called a satchel. Indiana Jones wears one.",
    source5: "Alan",
    citation5: "The Hangover"
  }
];
//console.log(quotes);


/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotes){
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes [randomNumber];
  getRandomQuote();
  console.log(randomNumber);
  console.log(randomQuote);
  return randomQuote;
}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);
