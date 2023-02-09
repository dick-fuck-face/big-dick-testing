document.addEventListener("DOMContentLoaded", function() {

const box = document.querySelector("#box");
const audioFiles = [
  "https://github.com/dick-fuck-face/big-dick-testing/blob/main/audio/sound1.mp3",
  "big-dick-testing/audio/sound2.mp3",
  "audio/sound3.mp3"
];

const randomIndex = Math.floor(Math.random() * audioFiles.length);
const randomAudioFile = audioFiles[randomIndex];
const audio = new Audio(randomAudioFile);


box.addEventListener("mouseover", function() {
  box.style.transform = "scale(1.2)";
});

box.addEventListener("mouseout", function() {
  box.style.transform = "scale(1)";
});

box.addEventListener("click", function() {
  audio.play();
});

dragElement(document.getElementById("box"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

});  
