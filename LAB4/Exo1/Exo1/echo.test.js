const { exf } = require('./echo');

test('exf function logs "echo" 5 times', () => {
  // Arrange
  const consoleSpy = jest.spyOn(console, 'log');

  // Act
  exf('echo', 5);

  // Assert
  expect(consoleSpy).toHaveBeenCalledTimes(5);
  expect(consoleSpy).toHaveBeenCalledWith('echo');

  // Cleanup
  consoleSpy.mockRestore();
});

test('exf function logs "JS from server" 10 times', () => {
  // Arrange
  const consoleSpy = jest.spyOn(console, 'log');

  // Act
  exf('JS from server', 10);

  // Assert
  expect(consoleSpy).toHaveBeenCalledTimes(10);
  expect(consoleSpy).toHaveBeenCalledWith('JS from server');

  // Cleanup
  consoleSpy.mockRestore();
});
