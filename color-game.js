var colors = generateRandomColors(6);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pick_color = pickColor();
var colorDis = document.getElementById("colorDis");
var messageDis = document.querySelector("#message");
var reset_button = document.querySelector("#reset")

reset_button.addEventListener("click", function() {
    colors = generateRandomColors(6);
    pick_color = pickColor();
    colorDis.textContent = pick_color;
    for (var i = 0; i < squares.length; i++) {
        //assign colors
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
})

colorDis.textContent = pick_color;

for (var i = 0; i < squares.length; i++) {
    //assign colors
    squares[i].style.backgroundColor = colors[i];
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