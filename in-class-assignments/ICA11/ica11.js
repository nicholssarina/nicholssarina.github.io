//window.addEventListener ('load',getQuote);

document.addEventListener('load',getQuote);

const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener ('click',getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote() {
    console.log('test click worked');
    let text = await fetch(endpoint)
    //.then(text => await text.text())
    let response = await text.text ();
    //.then(y => myDisplay(y));

    let json_response = JSON.parse(response);
    console.log(json_response);
    console.log(json_response['message']);
    displayQuote(json_response['message']);
}

function displayQuote(x) {
    const quoteBox = document.querySelector('#js-quote-text');
    //console.log('display quote working');
    //quoteBox.innerText(x);
    const textMessage = document.createTextNode(x);

    //quoteBox.appendChild(textMessage);

    document.getElementById ('js-quote-text').textContent = x;
}
getQuote();