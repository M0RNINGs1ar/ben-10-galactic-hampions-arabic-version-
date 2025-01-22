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

    // Hide all games first
    document.getElementById('ben10').style.visibility = 'hidden';
    document.getElementById('animebattle').style.visibility = 'hidden';
    document.getElementById('dbzDevolution').style.visibility = 'hidden';

    // Then show the selected game
    document.getElementById(game).style.visibility = 'visible';

    // Load the game content dynamically if it's not already loaded
    loadGame(game);
}

// Load the selected game
function loadGame(game) {
    var container = document.getElementById(game).getElementsByClassName('game-player')[0];
    if (game === 'ben10' && !container.innerHTML) {
        container.innerHTML = `<object type="application/x-shockwave-flash" data="https://m0rnings1ar.github.io/ben-10-galactic-hampions-arabic-version-/game.swf" width="800" height="600">
                                <param name="movie" value="https://m0rnings1ar.github.io/ben-10-galactic-hampions-arabic-version-/game.swf">
                                <param name="quality" value="high">
                                <param name="bgcolor" value="#ffffff">
                                Your browser does not support Flash. <a href="https://get.adobe.com/flashplayer/" target="_blank">Get Flash Player</a> to play the game.
                              </object>`;
    } else if (game === 'animebattle' && !container.innerHTML) {
        container.innerHTML = `<object type="application/x-shockwave-flash" data="https://w8.snokido.com/games/flash/anime-battle-2/game.swf" width="800" height="600">
                                <param name="movie" value="https://w8.snokido.com/games/flash/anime-battle-2/game.swf">
                                <param name="quality" value="high">
                                <param name="bgcolor" value="#ffffff">
                                Your browser does not support Flash. <a href="https://get.adobe.com/flashplayer/" target="_blank">Get Flash Player</a> to play the game.
                              </object>`;
    } else if (game === 'dbzDevolution' && !container.innerHTML) {
        container.innerHTML = `<iframe src="https://www.newgrounds.com/portal/view/590695" width="800" height="600"></iframe>`;
    }
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
        modeIcon.src = 'https://github.com/M0RNINGs1ar/ben-10-galactic-hampions-arabic-version-/blob/main/dark%20mode.svg?raw=true';
    } else {
        modeIcon.src = 'https://github.com/M0RNINGs1ar/ben-10-galactic-hampions-arabic-version-/blob/main/light%20mode.svg?raw=true';
    }
};
