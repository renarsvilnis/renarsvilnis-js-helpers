import range from './range';

describe('range', () => {
  it('should range value', () => {
    expect(range(0.5, 0, 1, 0, 2)).toEqual(1);
    expect(range(-1, 0, 1, 0, 2)).toEqual(-2);
  });
});
