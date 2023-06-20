export const calcImageWatermarkSize = (width?: any, height?: any) => {
  if (width && height) {
    const imageRatio = +width / +height;
    const mdRatio = 780 / 824;

    if (imageRatio > mdRatio) {
      return Math.round(352 / (780 / +width) / 4);
    }

    return Math.round(352 / (824 / +height) / 4);
  }

  return 88;
};
