import React from 'react';

export const stopPropagation = (
  e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>,
) => {
  e.stopPropagation();
  e.nativeEvent.preventDefault();
};
