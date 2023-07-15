let quoteArray = [
    {
        text: "First solve the problem, then write the code",
        author: "John Johnson"
    },
    {
        text: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House"
    },
    {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler"
    },
    {
        text: "Experience is the name everyone gives to their mistakes",
        author: "Oscar Wilde"
    },
    {
        text: "Everyone should learn to program because it teaches you how to think.",
        author: "Steve Jobs"
    },
    {
        text: "There is always one more bug to fix.",
        author: "Ellen Ulman"
    }
];

let lastQuote = null;

// create new quote to add to quoteArray
let newlyAddedQuote =
{
    text: "Tenacity is TALENT.",
    author: "Matt West"
};

// add new quote to add to quoteArray
quoteArray.push(newlyAddedQuote);

function getQuote() {
    // get a random quote from the quote array
    let newQuote = Math.floor(Math.random() * quoteArray.length);

    // check to see if newQuote is the same as the last quote. If so, get a new value
    while (newQuote === lastQuote) {
        newQuote = Math.floor(Math.random() * quoteArray.length);
    }

    return quoteArray[newQuote];
}



function newQuote() {
    // calls getQuote and changes display to show it

    console.log('you clicked the button!');

    // grab index.html elements and assign to variable
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");

    const quote = getQuote();

    quoteText.innerText = quote.text;
    quoteAuthor.innerText = quote.author;

}

// call newQuote on app launch
newQuote();

