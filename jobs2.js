<!DOCTYPE html>
<html>
  <head>
    <style>
      .emoji {
        position: absolute;
        width: 50px;
        height: 50px;
        font-size: 2em;
        user-select: none;
        cursor: grab;
      }
    </style>
  </head>
  <body>
    <div class="emoji">😀</div>

    <audio id="sound" src="sound.mp3"></audio>

    <script>
      const emoji = document.querySelector('.emoji');
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
      emoji.addEventListener("click", playSound);

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

      function playSound() {
        const sound = document.getElementById("sound");
        sound.currentTime = 0;
        sound.play();
      }
    </script>
  </body>
</html>
