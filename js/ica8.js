
/*let body = document.getElementById("sizerthing").innerHTML = Math.random()
body.addEventListener("resize", function(){
})

let body = document.querySelector('div')
body.addEventListener('click', giveAlert)
function giveAlert(){
    alert('this is an alert')
}*/

const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

pinky.addEventListener("click", function(){ box.style.background = "pink" });