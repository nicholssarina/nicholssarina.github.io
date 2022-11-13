
let errorMessage = ['That is not your number!', 'Come on now! Why are you lying to yourself? That isn`t your number.', 'Even I know your number, and there is no way that`s it',"Wrong!","Uh-uh! Not quite!","Come on now! Get that number right!",'Isn`t that the point of a number? That you know it???',"Uh uh, try again!","WRONG!!","You're crazy if you think that's your number"];

const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = errorMessage[Math.floor(Math.random() * errorMessage.length)];
    
}
