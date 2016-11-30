/* eslint-env jest */
import clamp from './clamp';

describe('clamp', () => {
  it('should clamp value', () => {
    expect(clamp(-1, 0, 100)).toEqual(0);
    expect(clamp(0, 0, 100)).toEqual(0);
    expect(clamp(0.0001, 0, 100)).toEqual(0.0001);
    expect(clamp(50, 0, 100)).toEqual(50);
    expect(clamp(66.6666, 0, 100)).toEqual(66.6666);
    expect(clamp(100, 0, 100)).toEqual(100);
    expect(clamp(101, 0, 100)).toEqual(100);
  });
});
