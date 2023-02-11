document.addEventListener("DOMContentLoaded", function () {
  const box = document.querySelector("#box");
  const audioFolder = "https://api.github.com/repos/dick-fuck-face/big-dick-testing/contents/audio";
  let audioFiles = [];
  let currentAudio;

  fetch(audioFolder)
    .then(res => res.json())
    .then(data => {
      audioFiles = data.map(file => file.download_url);
    });

  box.addEventListener("click", function () {
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


  const position = { x: 0, y: 0 }

  interact('#box').draggable({
    listeners: {
      start(event) {
        console.log(event.type, event.target)
      },
      move(event) {
        position.x += event.dx
        position.y += event.dy

        event.target.style.transform =
          `translate(${position.x}px, ${position.y}px)`
      },
    }
  })
});


const position = { x: 0, y: 0 }

interact('#box2').draggable({
  listeners: {
    start(event) {
      console.log(event.type, event.target)
    },
    move(event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})
