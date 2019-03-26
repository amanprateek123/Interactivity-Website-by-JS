let button = document.getElementById('color-button');


let mysteryButton = document.getElementById('next-button');

function rgb(num) {
  return Math.floor(Math.random() * num);
}

// Write your code below
let colorChange = function() {
  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor = colorChange;
}
button.onclick = colorChange;
mysteryButton.onwheel = colorChange;
