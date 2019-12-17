// API endpoint
const baseurl =
  "https://cors-anywhere.herokuapp.com/api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

// Setting variables to access html
const quote = document.querySelector("#quotes");
const newQuote = document.querySelector("#new-quote");
const saveQuote = document.querySelector("#save-quote");
const lst = document.querySelector("#saved-list");

// Event listeners
newQuote.addEventListener("click", fetchQuote);
saveQuote.addEventListener("click", storeQuote);

// Set quote for page load
fetchQuote();
// Initializing variables so they can be accessed in functions
let currentQuote;
let currentAuthor;
let currentString;

// Fetch the api and set the quotetext and author to html elements
function fetchQuote() {
  fetch(baseurl)
    .then(result => result.json())
    .then(json => setQuote(json));

  function setQuote(json) {
    console.log(json);
    currentQuote = json.quoteText;
    currentAuthor = json.quoteAuthor;
    quote.innerHTML = `"${json.quoteText}" \n -${json.quoteAuthor}`;
  }
}

// Creating a list element to contain the currentquote, so that it can be added to the UL in the html
function storeQuote() {
  let listElement = document.createElement("li");
  currentString = `"${currentQuote}" - ${currentAuthor}`;
  // for (li in lst) {
  //   if (li.innerHTML === currentString) {
  //     console.log('hello')
  //     return;
  //   }
  // }
  listElement.innerHTML = currentString;
  lst.appendChild(listElement);
}
