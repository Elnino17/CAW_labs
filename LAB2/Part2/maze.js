// Add this code to your maze.js file
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class "boundary"
    const boundaries = document.querySelectorAll(".boundary");

    // Loop through the boundary elements and add a mouseover event listener
    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", function() {
            // Turn the boundary red
            boundary.classList.add("youlose");
        });
    });
});

// Modify the code from Exercise 1
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class "boundary"
    const boundaries = document.querySelectorAll(".boundary");

    // Function to turn all boundaries red
    function turnAllBoundariesRed() {
        boundaries.forEach(function(boundary) {
            boundary.classList.add("youlose");
        });
    }

    // Add a mouseover event listener to any boundary
    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", turnAllBoundariesRed);
    });
});

// Modify the code from Exercise 1
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class "boundary"
    const boundaries = document.querySelectorAll(".boundary");

    // Function to turn all boundaries red
    function turnAllBoundariesRed() {
        boundaries.forEach(function(boundary) {
            boundary.classList.add("youlose");
        });
    }

    // Add a mouseover event listener to any boundary
    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", turnAllBoundariesRed);
    });
});

// Add this code to your maze.js file
document.addEventListener("DOMContentLoaded", function() {
    // Get the "end" element
    const end = document.getElementById("end");

    // Function to show a "You win!" alert
    function displayWinAlert() {
        alert("You win!");
    }

    // Add a mouseover event listener to the "end" element
    end.addEventListener("mouseover", displayWinAlert);
});
document.addEventListener("DOMContentLoaded", function() {
    const start = document.getElementById("start");
    const boundaries = document.querySelectorAll(".boundary");
    const exampleBoundary = document.querySelector(".boundary.example"); // Get the example boundary element
  
    function resetMaze() {
      boundaries.forEach(function(boundary) {
        boundary.classList.remove("youlose");
      });
    }
  
    // Add a click event listener to the example boundary for resetting the maze
    exampleBoundary.addEventListener("click", resetMaze);
  
    // Add a click event listener to the "start" element for resetting the maze as well
    start.addEventListener("click", resetMaze);
  
    // Add a keyboard event listener for the "r" key
    document.addEventListener("keydown", function(event) {
      if (event.key === "r") {
        resetMaze();
      }
    });
  });
  