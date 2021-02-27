function displayQuote() {
  const quoteWrapper = document.querySelector('.nav-quote');
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      quoteWrapper.textContent = `${data.content} -${data.author}`;
    });
}

export { displayQuote };
