document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video');
    var controls = document.getElementById('controls');
    var navigation = document.getElementById('navigation');
    var mouseIdleTimeout;
    var isControlsVisible = true;

    // Function to show the controls
    function showControls() {
        controls.style.visibility = 'visible';
        navigation.style.visibility = 'visible';
        isControlsVisible = true;
    }

    // Function to hide the controls
    function hideControls() {
        controls.style.visibility = 'hidden';
        navigation.style.visibility = 'hidden';
        isControlsVisible = false;
    }

    // Show controls initially
    showControls();

    // Function to reset the mouse idle timer
    function resetMouseIdleTimer() {
        clearTimeout(mouseIdleTimeout);
        if (!isControlsVisible) {
            showControls();
        }
        mouseIdleTimeout = setTimeout(function() {
            hideControls();
        }, 5000); // Adjust the time here (in milliseconds) for how long to wait before hiding controls
    }

    // Add event listeners for mouse movement and interaction
    document.addEventListener('mousemove', function() {
        if (!isControlsVisible) {
            showControls();
        }
        resetMouseIdleTimer();
    });

    document.addEventListener('mousedown', resetMouseIdleTimer);
    document.addEventListener('mouseup', resetMouseIdleTimer);
    document.addEventListener('keydown', resetMouseIdleTimer);
    document.addEventListener('keyup', resetMouseIdleTimer);
    document.addEventListener('touchstart', resetMouseIdleTimer);
    document.addEventListener('touchend', resetMouseIdleTimer);
    document.addEventListener('touchcancel', resetMouseIdleTimer);

    // Play button functionality
    var playButton = document.querySelector('#controls button:nth-child(1)');
    playButton.addEventListener('click', function() {
        video.play();
    });

    // Pause button functionality
    var pauseButton = document.querySelector('#controls button:nth-child(2)');
    pauseButton.addEventListener('click', function() {
        video.pause();
    });

    // Volume slider functionality
    var volumeSlider = document.querySelector('.level');
    volumeSlider.addEventListener('input', function() {
        var volume = volumeSlider.value / 100; // Volume range is between 0 and 1
        video.volume = volume;
    });
});

