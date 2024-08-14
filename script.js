document.body.addEventListener('click', function(e) {
  // Create a new span element for the ripple effect
  const ripple = document.createElement('span');
  ripple.className = 'ripple';

  // Set the ripple position based on the click position
  ripple.style.left = `${e.clientX - 50}px`;
  ripple.style.top = `${e.clientY - 50}px`;

  // Append the ripple to the body
  document.body.appendChild(ripple);

  // Remove the ripple after the animation ends
  ripple.addEventListener('animationend', function() {
    ripple.remove();
  });
});