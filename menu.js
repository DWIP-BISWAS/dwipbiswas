// menu.js

// Menu button actions
const startGameButton = document.getElementById('startGame');

startGameButton.addEventListener('click', function() {
    // Load the game when the start button is clicked
    window.location.href = 'game.html'; // Redirect to the game page
});
