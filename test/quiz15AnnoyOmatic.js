var message = "Are we there yet?";
var answer = prompt(message);

while(answer !== "yes" && answer !== "yeah"){
        answer = prompt(message);
    }

    alert("YAY, WE MADE IT!!");
