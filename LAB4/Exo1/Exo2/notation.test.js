const mean = require('./notation');

describe('mean function', () => {
  test('calculates the mean of an array of numbers', () => {
    // Arrange
    const scores = [85, 92, 78, 90, 88];

    // Act
    const result = mean(scores);

    // Assert
    expect(result).toBe(86.6); // Adjust this value based on your expected result
  });

  test('returns 0 for an empty array', () => {
    // Arrange
    const scores = [];

    // Act
    const result = mean(scores);

    // Assert
    expect(result).toBe(0);
  });
});
