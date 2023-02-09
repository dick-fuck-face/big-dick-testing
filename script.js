const emoji = document.querySelector("emoji");
const text = document.querySelector("text");
const buttons = document.querySelectorAll("button");
const substack-logo = document.querySelectorAll(".substack-logo");
const twitter-logo = document.querySelectorAll(".twitter-logo");

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

emoji.addEventListener("mouseover", function() {
  emoji.style.transform = "scale(1.2)";
});

emoji.addEventListener("mouseout", function() {
  emoji.style.transform = "scale(1)";
});

emoji.addEventListener("mousedown", dragStart);
emoji.addEventListener("mouseup", dragEnd);
emoji.addEventListener("mouseout", dragEnd);
emoji.addEventListener("mousemove", drag);

function dragStart(e) {
  initialX = e.clientX;
  initialY = e.clientY;
  xOffset = currentX - initialX;
  yOffset = currentY - initialY;
  isDragging = true;
}

function dragEnd(e) {
  isDragging = false;
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    currentX = e.clientX + xOffset;
    currentY = e.clientY + yOffset;

    emoji.style.top = currentY + "px";
    emoji.style.left = currentX + "px";
  }
}

buttons.forEach(function(button) {
  button.addEventListener("mouseover", function() {
    button.style.transform = "scale(1.2)";
    button.style.backgroundColor = "#FFC0CB";
  });

  button.addEventListener("mouseout", function() {
    button.style.transform = "scale(1)";
    button.style.backgroundColor = "pink";
  });
});
