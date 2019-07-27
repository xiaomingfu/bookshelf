 var secretNumber = 4;
 var guess = prompt("Give me a number");
 if(Number(guess) === secretNumber){
     alert("You Got It.");

 }
 else if (Number(guess) > secretNumber){
     alert("Too high. Guess again.");
 }
 else {
     alert("Too low. Guess again.")
 }
