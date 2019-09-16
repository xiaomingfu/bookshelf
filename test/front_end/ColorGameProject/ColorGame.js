
var squares = document.querySelectorAll(".square");
var colorPicker = document.querySelector("span");
var message = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector(".easy");
var hardBtn = document.querySelector(".hard");
var num = squares.length;
var h1 = document.querySelector("h1");
generateColor();

reset.addEventListener("click", function () {
    generateColor();
    reset.textContent = "New Colors";
    message.textContent = "";
    h1.style.background = "steelblue";
});

function generateColor() {
    var color = [];
    for (var i = 0; i < num; i++) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        color.push("rgb(" + r + ", " + g + ", " + b + ")");
        squares[i].style.background = color[i];
        squares[i].style.display = "block";
    }
    colorPicker.textContent = color[Math.floor(Math.random() * num)];
}

function cleckColor() {
    for (var i = 0; i < num; i++) {
        squares[i].addEventListener("click", function () {
            if (this.style.background === colorPicker.textContent) {
                for (var i = 0; i < num; i++) {
                    squares[i].style.background = colorPicker.textContent;
                };
                message.textContent = "Correct!";
                h1.style.background = colorPicker.textContent;
                reset.textContent = "Play again?";

            } else {
                message.textContent = "Try Again";
                this.style.background = "#232323";
            }
        });
    }
}

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    num = 3;
    generateColor();
    cleckColor();
    for(var i = 3; i < 6; i++){
        squares[i].style.display = "none";
    }
});
hardBtn.addEventListener("click",function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    num = 6;
    generateColor();
    cleckColor();
});