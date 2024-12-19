/* Edit this file */
// scripts.js

// Get all the elements
const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause-btn');
const progressFilled = document.getElementById('progress-filled');
const volumeControl = document.getElementById('volume-control');
const playbackSpeedControl = document.getElementById('playback-speed');
const skipBackwardButton = document.getElementById('skip-backward');
const skipForwardButton = document.getElementById('skip-forward');

// Play/Pause button logic
playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = '❚ ❚'; // Change text to pause icon
    } else {
        video.pause();
        playPauseButton.textContent = '►'; // Change text to play icon
    }
});

// Update progress bar as video plays
video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = progress + '%';
});

// Change video volume
volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
});

// Change playback speed
playbackSpeedControl.addEventListener('input', () => {
    video.playbackRate = playbackSpeedControl.value;
});

// Skip 10 seconds backward
skipBackwardButton.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Skip 25 seconds forward
skipForwardButton.addEventListener('click', () => {
    video.currentTime += 25;
});

// Set initial values
volumeControl.value = video.volume;
playbackSpeedControl.value = video.playbackRate;
