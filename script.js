document.querySelectorAll('.neon-flip-card').forEach(card => {
  card.addEventListener('click', function() {
    card.classList.toggle('flipped');
  });
});
