const emoji = document.querySelector('.emoji');
const text = document.querySelector('#text');

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

emoji.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragEnd);
document.addEventListener("mouseout", dragEnd);
document.addEventListener("mousemove", drag);

function dragStart(e) {
  initialX = e.clientX;
  initialY = e.clientY;
  xOffset = emoji.offsetLeft - initialX;
  yOffset = emoji.offsetTop - initialY;
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
    emoji.style.
  }
