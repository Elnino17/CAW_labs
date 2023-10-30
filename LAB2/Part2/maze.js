document.addEventListener("DOMContentLoaded", function() {
    const boundaries = document.querySelectorAll(".boundary");
    const end = document.getElementById("end");
    const start = document.getElementById("start");
    const exampleBoundary = document.querySelector(".boundary.example");
    const status = document.getElementById("status");
    let gameStarted = false;
    let inMaze = true;

    function turnAllBoundariesRed() {
        if (gameStarted && inMaze) {
            boundaries.forEach(function(boundary) {
                boundary.style.backgroundColor = "#ff8888"; // Red color
            });
            status.textContent = "You lose! Press 'R' to play again.";
        }
    }

    function displayWinMessage() {
        if (gameStarted) {
            status.textContent = "You win! Press 'R' to play again.";
            boundaries.forEach(function(boundary) {
                boundary.style.backgroundColor = "#88ff88"; // Green color
            });
        }
    }

    function resetMaze() {
        boundaries.forEach(function(boundary) {
            boundary.classList.remove("youlose");
            boundary.style.backgroundColor = "#eeeeee";
        });
        status.textContent = "Move your mouse over the 'S' to begin.";
        gameStarted = false;
        inMaze = true;
    }

    function checkWin() {
        if (gameStarted) {
            const isAnyBoundaryRed = Array.from(boundaries).some(boundary => boundary.classList.contains("youlose"));
            if (!isAnyBoundaryRed) {
                displayWinMessage();
            } else {
                status.textContent = "You lose!";
            }
        }
    }

    exampleBoundary.addEventListener("click", resetMaze);
    start.addEventListener("click", function() {
        resetMaze();
        gameStarted = true;
    });
    end.addEventListener("mouseover", checkWin);

    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", turnAllBoundariesRed);
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "r") {
            resetMaze();
        }
    });

    const maze = document.getElementById("maze");
    maze.addEventListener("mouseleave", function() {
        if (gameStarted) {
            inMaze = false;
            turnAllBoundariesRed();
        }
    });
});
