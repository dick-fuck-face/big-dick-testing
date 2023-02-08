const emoji = document.querySelector('.emoji');

emoji.addEventListener('mouseenter', () => {
  emoji.style.transform = 'rotate(360deg)';
});

emoji.addEventListener('mouseleave', () => {
  emoji.style.transform = 'rotate(0)';
});
