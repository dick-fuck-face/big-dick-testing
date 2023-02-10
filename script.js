document.addEventListener("DOMContentLoaded", function() {
  const box = document.querySelector("#box");
  const audioFolder = "https://api.github.com/repos/dick-fuck-face/big-dick-testing/contents/audio";
  let audioFiles = [];
  let currentAudio;

  $(document).ready(function() {
    $("#box").draggable({
      axis: false,
      helper: 'original'
    });

    $("#box2").draggable({
      axis: false,
      helper: 'original'
    });

  });

  $("#emoji").click(function() {
    $("#emoji").fadeOut();
  });

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
});
