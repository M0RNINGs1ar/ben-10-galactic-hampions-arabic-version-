// Dark/Light Mode Toggle
function toggleMode() {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');
    
    // Get the mode toggle icon
    var icon = document.getElementById('modeToggle');

    // Change icon based on the mode
    if (document.body.classList.contains('dark-mode')) {
        icon.textContent = "🌞"; // Switch to sun (light mode)
    } else {
        icon.textContent = "🌙"; // Switch to moon (dark mode)
    }
}

// Function to show selected game and update title dynamically
function showGame(game) {
    if (game === 'ben10') {
        document.title = "Ben 10 Galactic Champions";
        document.getElementById('gameTitle').textContent = "Ben 10 Galactic Champions : Arabic edition";
    } else if (game === 'animebattle') {
        document.title = "Anime Battle 2.2";
        document.getElementById('gameTitle').textContent = "Anime Battle 2.2";
    } else if (game === 'dbzDevolution') {
        document.title = "DBZ Devolution 1.2.3";
        document.getElementById('gameTitle').textContent = "DBZ Devolution 1.2.3";
    }

    // Hide all game containers
    document.getElementById('ben10').classList.remove('active');
    document.getElementById('animebattle').classList.remove('active');
    document.getElementById('dbzDevolution').classList.remove('active');

    // Show selected game
    if (game === 'ben10') {
        document.getElementById('ben10').classList.add('active');
    } else if (game === 'animebattle') {
        document.getElementById('animebattle').classList.add('active');
    } else if (game === 'dbzDevolution') {
        document.getElementById('dbzDevolution').classList.add('active');
    }
}

// Show default game when the page loads
window.onload = function() {
    showGame('ben10');
};

// Prevent direct access to JavaScript or CSS files by redirecting the user
(function() {
    var scripts = document.querySelectorAll('script[src]');
    scripts.forEach(function(script) {
        var filePath = script.src.split('/').pop();
        if (filePath === 'script.js' || filePath === 'styles.css') {
            script.addEventListener('error', function() {
                window.location.href = '/'; // Redirect to main page
            });
        }
    });
})();
