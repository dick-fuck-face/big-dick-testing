document.addEventListener("DOMContentLoaded", function() {
  const box = document.querySelector("#box");
  const box2 = document.querySelector("#box2");
  const emoji = document.querySelector("#emoji");
  const audioFolder = "https://api.github.com/repos/dick-fuck-face/big-dick-testing/contents/audio";
  let audioFiles = [];
  let currentAudio;

  fetch(audioFolder)
    .then(res => res.json())
    .then(data => {
      audioFiles = data.map(file => file.download_url);
    });

  box.addEventListener("click", function() {
    if (audioFiles.length) {
      const randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentAudio = new Audio(randomAudio);
      currentAudio.play();
    }
  });

  box.addEventListener("mouseover", function() {
    box.style.transform = "scale(1.2)";
  });

  box.addEventListener("mouseout", function() {
    box.style.transform = "scale(1)";
  });

  dragElement(document.getElementById("box"));
  
  box2.addEventListener("mouseover", function() {
  box2.style.transform = "scale(1.2)";
});

  box2.addEventListener("mouseout", function() {
  box2.style.transform = "scale(1)";
});

  dragElement(document.getElementById("box2"));
  
  emoji.addEventListener("mouseover", function() {
  emoji.style.transform = "scale(1.2)";
});

  emoji.addEventListener("mouseout", function() {
  emoji.style.transform = "scale(1)";
});

  dragElement(document.getElementById("emoji"));

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
