// Ripple effect script
document.body.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX - 50}px`;
    ripple.style.top = `${e.clientY - 50}px`;
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', function() {
        ripple.remove();
    });
});

// Sidebar toggle script
document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('open');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('open');
});
