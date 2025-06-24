
const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "Success is not in what you have, but who you are.",
    "Your time is limited, don’t waste it living someone else’s life.",
    "Hardships often prepare ordinary people for an extraordinary destiny."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}
