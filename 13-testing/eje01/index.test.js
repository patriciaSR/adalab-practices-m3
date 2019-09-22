const sum = require('./index');

describe('Sum App', () => {
  
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds -1 + 2 to equal 1', () => {
    expect(sum(-1, 2)).toBe(1);
  });

  test('sun decimal numbers', () => {
    expect(sum(1.5, 2)).toBe(3.5);
  });
});