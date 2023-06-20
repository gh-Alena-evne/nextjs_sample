import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import { getCollections } from '@bus/orders/selectors';
import { uiActions } from '@bus/ui/actions';
import { CollectionsList } from '@components/addToCollectionModal/CollectionsList';
import { EmptyModalCollection } from '@components/addToCollectionModal/EmptyModalCollection';
import { styles } from './styles';

type AddToCollectionProps = {
  productId: number;
};

export const AddToCollection: React.FC<AddToCollectionProps> = ({
  productId,
}) => {
  const collections = useSelector(getCollections);
  const dispatch = useDispatch();

  const handleCreateCollection = () => {
    dispatch(
      uiActions.modal({
        modalName: 'CreateNewCollection',
        modalPayload: {
          title: 'Add this Image to Collection',
          productId: productId,
        },
      }),
    );
  };

  return (
    <Box sx={styles.root}>
      {collections?.data?.length ? (
        <CollectionsList collections={collections.data} productId={productId} />
      ) : (
        <EmptyModalCollection />
      )}
      <Box sx={styles.buttonWrapper}>
        <Button
          fullWidth
          variant={'outlined'}
          color={'secondary'}
          onClick={handleCreateCollection}>
          Create new
        </Button>
      </Box>
    </Box>
  );
};
