// arrayFunctions.test.js
const { first, last, chunk } = require('./arrayFunctions');

// 1. first Function
test('first returns the first n elements of an array', () => {
  expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
});

test('first returns an empty array if n is zero or negative', () => {
  expect(first([1, 2, 3], -2)).toEqual([]);
});

test('first returns the first element if n is not provided', () => {
  expect(first([1, 2, 3])).toBe(1);
});

test('first returns an empty array if the input array is null', () => {
  expect(first(null, 2)).toEqual([]);
});

// 2. last Function
test('last returns the last n elements of an array', () => {
  expect(last([1, 2, 3, 4, 5], 2)).toEqual([4, 5]);
});

test('last returns the last element if n is not provided', () => {
  expect(last([1, 2, 3])).toBe(3);
});

test('last returns an empty array if the input array is null', () => {
  expect(last(null, 2)).toEqual([]);
});

// 3. chunk Function
test('chunk divides an array into several sub-arrays of predefined size', () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7], 2)).toEqual([[1, 2], [3, 4], [5, 6], [7]]);
});

test('chunk returns an empty array if the input array is empty', () => {
  expect(chunk([], 3)).toEqual([]);
});

test('chunk handles cases where size is greater than the length of the array', () => {
  expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
});
