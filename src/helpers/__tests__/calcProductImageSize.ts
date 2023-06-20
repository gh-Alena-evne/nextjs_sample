import { calcProductImageSize } from '@helpers/calcPrioductImageSize';

describe('calcProductImageSize', () => {
  it('should return correct size', () => {
    const size = calcProductImageSize(2000, 2996, 687, 780);
    expect(size).toEqual({ width: 458, height: 687 });
  });
});
