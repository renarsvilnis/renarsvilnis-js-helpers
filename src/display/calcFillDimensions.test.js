/* eslint-env jest */
import calcFillDimensions from './calcFillDimensions';

describe('calcFillDimensions', () => {
  it('should calculate correct fill dimensions', () => {
    expect(calcFillDimensions(100, 100, 50, 50)).toEqual({width: 50, height: 50});
    expect(calcFillDimensions(100, 200, 50, 50)).toEqual({width: 50, height: 100});
    expect(calcFillDimensions(200, 100, 100, 50)).toEqual({width: 100, height: 50});
    expect(calcFillDimensions(200, 100, 50, 50)).toEqual({width: 100, height: 50});

    expect(calcFillDimensions(100, 100, 1000, 1000)).toEqual({width: 1000, height: 1000});
    expect(calcFillDimensions(100, 100, 1000, 1000, {upscale: false})).toEqual({width: 100, height: 100});

    expect(calcFillDimensions(184, 386, 184, 380)).toEqual({width: 184, height: 386});
  });
});
