var randomNumber1 = (Math.random()*6)+1;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = (Math.random()*6)+1;
randomNumber2 = Math.floor(randomNumber2);

var randomDiceImages1 = "dice" + randomNumber1 + ".png";
var randomDiceSource1 = "images/" + randomDiceImages1;

var randomDiceImages2 = "dice" + randomNumber2 + ".png";
var randomDiceSource2 = "images/" + randomDiceImages2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceSource1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceSource2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML  = "🎉Player 1 Wins!";
} else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML = "🎉Player 2 Wins!";
} else if (randomNumber1===randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
