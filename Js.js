// Dark/Light mode toggle function
function toggleMode() {
    const currentMode = document.body.style.backgroundColor === "rgb(18, 18, 18)" ? "light" : "dark";
    
    if (currentMode === "dark") {
        document.body.style.backgroundColor = "#f9f9f9"; // Light mode background
        document.body.style.color = "#333"; // Light mode text
        document.getElementById("modeToggle").textContent = "🌙"; // Moon icon
    } else {
        document.body.style.backgroundColor = "#121212"; // Dark mode background
        document.body.style.color = "#fff"; // Dark mode text
        document.getElementById("modeToggle").textContent = "🌞"; // Sun icon
    }
}

// Function to display the selected game and update title dynamically
function showGame(game) {
    // Update the title dynamically based on the selected game
    if (game === 'ben10') {
        document.title = "Ben 10 Galactic Champions";
    } else if (game === 'animebattle') {
        document.title = "Anime Battle 2.2";
    } else if (game === 'dbzDevolution') {
        document.title = "DBZ Devolution 1.2.3";
    }

    // Hide all game containers
    const games = document.querySelectorAll('.game-container');
    games.forEach(gameContainer => {
        gameContainer.classList.remove('active');
    });

    // Show the selected game container
    document.getElementById(game).classList.add('active');
}
