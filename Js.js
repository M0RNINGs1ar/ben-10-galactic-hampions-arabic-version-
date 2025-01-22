// Function to display the selected game and update title dynamically
function showGame(game) {
    // Update the title dynamically based on the selected game
    if (game === 'ben10') {
        document.title = "Ben 10 Galactic Champions"; 
        document.getElementById('gameTitle').textContent = "Ben 10 Galactic Champions";
    } else if (game === 'animebattle') {
        document.title = "Anime Battle 2.2";
        document.getElementById('gameTitle').textContent = "Anime Battle 2.2";
    } else if (game === 'dbzDevolution') {
        document.title = "DBZ Devolution";
        document.getElementById('gameTitle').textContent = "DBZ Devolution";
    }

    // Hide all games and show the selected game
    document.getElementById('ben10').style.display = 'none';
    document.getElementById('animebattle').style.display = 'none';
    document.getElementById('dbzDevolution').style.display = 'none';

    // Display the selected game
    document.getElementById(game).style.display = 'block';
}

// Show the Ben 10 game by default when the page loads
window.onload = function() {
    showGame('ben10');
};

// Dark/Light mode toggle functionality
document.getElementById('modeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');

    const modeIcon = document.getElementById('modeIcon');
    if (document.body.classList.contains('dark')) {
        modeIcon.textContent = '🌙';  // Dark mode icon
    } else {
        modeIcon.textContent = '🌞';  // Light mode icon
    }
};
