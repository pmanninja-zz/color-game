var num_square = 6;
var pick_color;
var colors = [];
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDis = document.getElementById("colorDis");
var messageDis = document.querySelector("#message");
var reset_button = document.querySelector("#reset")
var mode_button = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButton();
    setUpSquares();
    reset();
}

function setUpModeButton() {
    for (var i = 0; i < mode_button.length; i++) {
        mode_button[i].addEventListener("click", function() {
            mode_button[0].classList.remove("selected");
            mode_button[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? num_square = 3 : num_square = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        //testing events
        squares[i].addEventListener("click", function() {
            var clicked_color = this.style.backgroundColor;

            if (clicked_color === pick_color) {
                messageDis.textContent = "correct";
                reset_button.textContent = "Play Again?";
                h1.style.backgroundColor = clicked_color;
                changeColors(clicked_color);
            } else {
                this.style.backgroundColor = "#232323";
                messageDis.textContent = "Try again";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(num_square);
    pick_color = pickColor();
    colorDis.textContent = pick_color;
    messageDis.textContent = "";
    reset_button.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++) {
        //assign colors
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

reset_button.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
        //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}