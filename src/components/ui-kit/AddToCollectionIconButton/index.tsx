import React from 'react';
import IconButton from '@components/ui-kit/IconButton';
import CheckIcon from '@components/ui-kit/Icons/CheckIcon';
import CreateNewFolderIcon from '@components/ui-kit/Icons/CreateNewFolderIcon';
import { styles } from './styles';

type AddToCollectionIconButtonProps = {
  onClick: (
    event:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => void;
  isInCollection: boolean;
  icon?: any;
};

const AddToCollectionIconButton: React.FC<AddToCollectionIconButtonProps> = ({
  isInCollection,
  onClick,
  icon,
}) => {
  return (
    <IconButton
      sx={[styles.root, isInCollection && styles.inCart]}
      onClick={onClick}
      color={'default'}>
      {icon ? (
        icon
      ) : (
        <>
          {isInCollection ? (
            <CheckIcon fontSize={'small'} />
          ) : (
            <CreateNewFolderIcon fontSize={'small'} />
          )}
        </>
      )}
    </IconButton>
  );
};

export default AddToCollectionIconButton;
