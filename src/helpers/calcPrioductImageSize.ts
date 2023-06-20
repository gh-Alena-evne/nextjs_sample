export const calcProductImageSize = (
  width: number,
  height: number,
  maxHeight: number,
  maxWidth: number,
) => {
  const imageRatio = width / height;
  const mdRatio = maxWidth / maxHeight;

  if (imageRatio > mdRatio) {
    const ratio = height / width;

    return {
      width: maxWidth,
      height: Math.floor(maxWidth * ratio),
    };
  }

  return {
    width: Math.floor(maxHeight * imageRatio),
    height: maxHeight,
  };
};
