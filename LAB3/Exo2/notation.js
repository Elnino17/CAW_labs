// notation.js

function mean(scores) {
    if (scores.length === 0) {
      return 0;
    }
  
    const sum = scores.reduce((total, score) => total + score, 0);
    const average = sum / scores.length;
  
    return average;
  }
  
  module.exports = mean;
  