// menu.js

// Slider elements
const gameModeSlider = document.getElementById('gameModeSlider');
const gameModeLabel = document.getElementById('gameModeLabel');

const musicVolumeSlider = document.getElementById('musicVolumeSlider');
const musicVolumeLabel = document.getElementById('musicVolumeLabel');

// Menu buttons
const startGameButton = document.getElementById('startGame');
const settingsButton = document.getElementById('settings');
const creditsButton = document.getElementById('credits');
const exitButton = document.getElementById('exitGame');

// Update Game Mode label based on slider value
gameModeSlider.addEventListener('input', function() {
    const modes = ['Easy', 'Medium', 'Hard'];
    gameModeLabel.textContent = modes[gameModeSlider.value - 1]; // Slider value: 1 = Easy, 2 = Medium, 3 = Hard
});

// Update Music Volume label based on slider value
musicVolumeSlider.addEventListener('input', function() {
    musicVolumeLabel.textContent = musicVolumeSlider.value + '%';
    // Adjust actual background music volume here
    // For example: backgroundMusic.volume = musicVolumeSlider.value / 100;
});

// Menu button actions
startGameButton.addEventListener('click', function() {
    alert('Starting Game! (Replace this with actual game initialization)');
});

settingsButton.addEventListener('click', function() {
    alert('Opening Settings! (Extend this to actual settings)');
});

creditsButton.addEventListener('click', function() {
    alert('Showing Credits! (Show actual credits)');
});

exitButton.addEventListener('click', function() {
    alert('Exiting Game! (Exit functionality depends on platform)');
    // On a web platform, you might reload the page or hide the menu
    // For example: window.location.reload();
});
                                
