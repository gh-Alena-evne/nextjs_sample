import dynamic from 'next/dynamic';
import React from 'react';
import { styles } from './styles';

const DynamicIconButton = dynamic(
  () => import('@components/ui-kit/IconButton'),
);
const DynamicCartAddIcon = dynamic(
  () => import('@components/ui-kit/Icons/CartAddIcon'),
);
const DynamicCheckIcon = dynamic(
  () => import('@components/ui-kit/Icons/CheckIcon'),
);

type AddToCartButtonProps = {
  onClick: (
    event:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => void;
  isInCart: boolean;
  icon?: any;
};

const AddToCartIconButton: React.FC<AddToCartButtonProps> = ({
  isInCart,
  onClick,
  icon,
}) => {
  return (
    <DynamicIconButton
      sx={[styles.root, isInCart && styles.inCart]}
      onClick={onClick}
      color={'default'}>
      {icon ? (
        icon
      ) : (
        <>
          {isInCart ? (
            <DynamicCheckIcon fontSize={'small'} />
          ) : (
            <DynamicCartAddIcon fontSize={'small'} />
          )}
        </>
      )}
    </DynamicIconButton>
  );
};

export default AddToCartIconButton;
