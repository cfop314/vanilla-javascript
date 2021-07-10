const quotes = [
    {
        quote: "Imagination is more important than knowledge.",
        author: "Albert Einstein",
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance you must keep moving.",
        author: "Albert Einstein",
    },
    {
        quote: "Если вы хотите вести счастливую жизнь, вы должны быть привязаны к цели, а не к людям или к вещам.",
        author: "Альберт Эйнштейн"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;