//Step 1: generate random numbers...for both dices..1 t0 6
let randomDice1 = Math.floor(Math.random()*6)+1;
console.log(randomDice1);

let randomDice2 = Math.floor(Math.random()*6)+1;
console.log(randomDice2);

//DOM manipulation: set the src attribute of the <img> tag..
let srcLocation1 = "images/dice"+randomDice1+".png";
document.querySelector(".img1").setAttribute("src",srcLocation1);

let srcLocation2 = "images/dice"+randomDice2+".png";
document.querySelector(".img2").setAttribute("src",srcLocation2);

//Winner check:
if(randomDice1>randomDice2){
  document.querySelector("h1").innerHTML = "Player1 Wins!";
}
else if(randomDice1<randomDice2){
  document.querySelector("h1").innerHTML = "Player2 Wins!";
}

else{
  document.querySelector("h1").innerHTML = "Draw!";
}
