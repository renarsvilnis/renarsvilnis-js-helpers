/* eslint-env jest */
import calcFitDimensions from './calcFitDimensions';

describe('calcFitDimensions', () => {
  it('should calculate correct fit dimensions', () => {
    // upscaled versions
    expect(calcFitDimensions(100, 100, 1000, 1000)).toEqual({width: 1000, height: 1000});
    expect(calcFitDimensions(100, 100, 500, 500)).toEqual({width: 500, height: 500});
    expect(calcFitDimensions(100, 200, 500, 500)).toEqual({width: 250, height: 500});
    expect(calcFitDimensions(200, 100, 500, 500)).toEqual({width: 500, height: 250});

    // non-upscaled versions
    expect(calcFitDimensions(100, 100, 1000, 1000, {upscale: false})).toEqual({width: 100, height: 100});
    expect(calcFitDimensions(100, 50, 1000, 500, {upscale: false})).toEqual({width: 100, height: 50});
    expect(calcFitDimensions(50, 100, 500, 1000, {upscale: false})).toEqual({width: 50, height: 100});
  });
});
