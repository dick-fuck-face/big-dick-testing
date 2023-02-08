const emoji = document.querySelector('.emoji');
if (!emoji) {
  console.error('The emoji element could not be found');
  return;
}

const sound = document.getElementById("sound");
if (!sound) {
  console.error('The sound element could not be found');
  return;
}

emoji.addEventListener("click", function() {
  sound.play();
});

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

emoji.addEventListener("mousedown", dragStart);
emoji.addEventListener("mouseup", dragEnd);
emoji.addEventListener("mouseout", dragEnd);
emoji.addEventListener("mousemove", drag);

function dragStart(e) {
  initialX = e.clientX;
  initialY = e.clientY;
  currentX = initialX;
  currentY = initialY;
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
