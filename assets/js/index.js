var nextSlider = document.querySelector(".right-slider");
var prevSlider = document.querySelector(".left-slider");

var left = 1;
var right = 3;

for (let i = left; i <= right; i++) {
  document.getElementById("c" + i).style.display = "inline-block";
}

nextSlider.onclick = function () {
  next("next");
};
prevSlider.onclick = function () {
  next("prev");
};

// when user click on the left or right arrow then this function will be called, if user click on right arrow then it will hide the first card that was displayed earlier and then increment the left and right index of card by one and displays the next three card (it also handles the edge case if we haven't enough card then it will start again by first card).it handles similarly for left arrow click.
function next(direction) {
  console.log(direction);
  if (direction == "next") {
    document.getElementById("c" + left).style.display = "none";
    left++;
    right++;
    if (right > 6) {
      for (i = left; i <= 6; i++) {
        document.getElementById("c" + i).style.display = "none";
      }
      left = 1;
      right = 3;
    }
    for (i = left; i <= Math.min(left + 2); i++) {
      document.getElementById("c" + i).style.display = "inline-block";
    }
  } else {
    document.getElementById("c" + right).style.display = "none";
    left--;
    right--;
    if (left < 1) {
      for (i = 1; i <= right; i++) {
        document.getElementById("c" + i).style.display = "none";
      }
      left = 4;
      right = 6;
    }
    for (i = left; i <= right; i++) {
      document.getElementById("c" + i).style.display = "inline-block";
    }
  }
}
