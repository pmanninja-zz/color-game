var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)"
]

var squares = document.querySelectorAll(".square");
var pick_color = colors[3];
var colorDis = document.getElementById("colorDis")

colorDis.textContext = pick_color;

for (var i = 0; i < squares.length; i++) {
    //assign colors
    squares[i].style.backgroundColor = colors[i];
    //testing events
    squares[i].addEventListener("click", function() {
        var clicked_color = this.style.backgroundColor;

        if (clicked_color === pick_color) {
            alert("correct");
        } else {
            alert("try again");
        }
    });
}