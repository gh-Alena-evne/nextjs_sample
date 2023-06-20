import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { getSingleCollections } from '@bus/orders/selectors';
import CollectionList from '@components/account/CollectionList';
import CollectionTitle from '@components/account/CollectionTitle';
import { styles } from './styles';

type CollectionProps = {};

const Collection: React.FC<CollectionProps> = () => {
  const singleCollections = useSelector(getSingleCollections);

  return singleCollections ? (
    <Box sx={styles.root}>
      <CollectionTitle
        total={singleCollections.userProductsCollection.total}
        title={singleCollections.collection.title}
        collectionId={singleCollections.collection.id}
      />
      <CollectionList list={singleCollections.userProductsCollection.data} />
    </Box>
  ) : null;
};

export default Collection;
