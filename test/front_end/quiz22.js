var input = document.querySelector("#scoreInput");
var log = document.querySelector("#scoreNumber");
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Res = document.querySelector("#p1Score");
var p2Res = document.querySelector("#p2Score");
var p1score = 0;
var p2score = 0;
p1Button.addEventListener("click", function () {
    if (p2score < log.textContent) {    
        if(p1score < log.textContent){
            p1score++;
            p1Res.textContent = p1score;
        }
        else{
            p1Res.classList.add("winner");
        }
    }
});
p2Button.addEventListener("click", function() {
    if (p1score < log.textContent) {
        if(p2score < log.textContent){
            p2score++;
            p2Res.textContent = p2score;
        }
        else{
            p2Res.classList.add("winner");
        }
    }
});
resetButton.addEventListener("click",reset);

function reset() {
    p1Res.textContent = 0;
    p2Res.textContent = 0;
    p1score = 0;
    p2score = 0;
    p1Res.classList.remove("winner");
    p2Res.classList.remove("winner");
}

input.addEventListener("input", function () {
    log.textContent = input.value;
    reset();
});



