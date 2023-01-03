/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * Created the quotes array 
 * Inside the array are 5 different objects
 * inside each object is a quote and a source
***/
let quotes = [
  {
    quote: "There's no crying in baseball!",
    source: "Jimmy Dugan",
    citation: "A Leage of Their Own"
  },
  {
    quote: 'You sit on a throne of lies',
    source: 'Buddy the elf',
    year: '2003'
  },
  {
    quote: "Show me the money!",
    source: "Rod Tidwell",
    citation: "Jerry Maguire"
  },
  {
    quote: "I'm not like a regular mom, I'm a cool mom.",
    source: "Mrs. George",
    citation:"Mean Girls"
  },
  {
    quote: "It's not a man purse. It's called a satchel. Indiana Jones wears one.",
    source: "Alan",
    citation: "The Hangover"
  }
];


/***
 * `getRandomQuote` function
 * created randomNumber variable to generate a random number between 0 and the length of the quotes array
 * created randomQuote variable which uses the random number to return a random quote object from the quotes array
 * returned the random quote variable to end the function
 * below the function, I then called the getRandomQuote function
***/
function getRandomQuote(quotes){
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNumber];
  return randomQuote;
}
getRandomQuote(quotes);


/***
 * Created the `printQuote` function
 * created 'randomQuote2' variable that stores a random quote object from the 'getRandomQuote' function
 * created 'html' variable that stores the html string
 * inside the html string, there are two <p> elements, one class equal to quote and the other equal to source
 * below the <p> elements, there are two if statements that check if citation and year properties exist in 'randomQuote2'
 * if these properties exist, they will be addeed only the html string 
 * Then the </p> is added to the html string to close out the opening <p
 * lastly, the html string is printed onto the page
***/
function printQuote (){
  const randomQuote2 = getRandomQuote(quotes);
  let html = `

  <p class="quote"> ${randomQuote2.quote} </p>
  <p class="source"> ${randomQuote2.source}`;
      if (randomQuote2.citation){html += `<span class="citation"> ${randomQuote2.citation} </span>`;}
      if (randomQuote2.year){html += `<span class="year"> ${randomQuote2.year} </span>`;}
      html += '</p>';
  document.getElementById("quote-box").innerHTML = html;
}
/***
 * below i am calling the printQuote function when the page loads
 * before adding this, the page loaded the Twitter quote that came with the project
 * source: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
***/
window.onload = function() {
  printQuote();
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
