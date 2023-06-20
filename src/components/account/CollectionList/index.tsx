import React, { useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch, useSelector } from 'react-redux';
import { Masonry } from '@mui/lab';
import { Box, ImageListItem, useMediaQuery } from '@mui/material';
import { cartActions } from '@bus/cart/actions';
import { getCart } from '@bus/cart/selectors';
import { ordersActions } from '@bus/orders/actions';
import {
  getIsOrdersFetching,
  getSingleCollectionNextUrl,
} from '@bus/orders/selectors';
import { ISingleCollectionItem } from '@bus/orders/typedefs';
import { uiActions } from '@bus/ui/actions';
import CollectionListItem from '@components/account/CollectionListItem';
import Loader from '@components/common/Loader';
import AttentionIcon from '@components/ui-kit/Icons/AttentionIcon';
import { styles } from './styles';

type CollectionListProps = {
  list: ISingleCollectionItem[];
};

const CollectionList: React.FC<CollectionListProps> = ({ list }) => {
  const dispatch = useDispatch();
  const matches = useMediaQuery('(min-width:960px)');

  const singleCollectionNextPage = useSelector(getSingleCollectionNextUrl);
  const isFetching = useSelector(getIsOrdersFetching);
  const cart = useSelector(getCart);
  const getProducts = useCallback(() => {
    !isFetching &&
      singleCollectionNextPage &&
      dispatch(ordersActions.loadMoreProducts(singleCollectionNextPage));
  }, [isFetching, singleCollectionNextPage]);

  const handleCartAdd = (product: ISingleCollectionItem) => {
    dispatch(
      cartActions.addCartItem({
        product: product.product,
        priceVariant: null,
      }),
    );
  };

  const handleCartRemove = (product: ISingleCollectionItem) => {
    dispatch(cartActions.removeCartItem(product.product.id));
  };

  const handleRemoveFromCollection = (product: ISingleCollectionItem) => {
    dispatch(
      uiActions.modal({
        modalName: 'ConfirmOrCancel',
        modalPayload: {
          onConfirm: () => {
            dispatch(uiActions.closeModal());
            dispatch(
              ordersActions.deleteProductFromCollection({
                product_id: product.product.id,
                collection_ids: [product.collection_id],
              }),
            );
          },
          subtitle: {
            icon: AttentionIcon,
            title: 'Confirm action',
            subtitle:
              'Are you sure you want to remove this image from the collection. You will not be able to recover it?',
          },
          cancelButton: {
            text: 'No',
          },
          confirmButton: {
            text: 'Yes',
          },
          isCloseButton: true,
        },
      }),
    );
  };

  const isItemInCart = (product: ISingleCollectionItem) => {
    return cart.data.some(
      (cartItem) => cartItem.product.id === product.product.id,
    );
  };

  return (
    <Box sx={styles.root} id={'gallery'}>
      {list && (
        <InfiniteScroll
          initialLoad={false}
          loadMore={getProducts}
          hasMore={!!singleCollectionNextPage}
          threshold={200}
          loader={<Loader key={'loader'} />}>
          <Masonry
            sx={{ m: 0 }}
            columns={matches ? 4 : 2}
            spacing={2.3}
            defaultHeight={450}
            defaultColumns={matches ? 4 : 2}
            defaultSpacing={2}>
            {list.map((image) => (
              <ImageListItem key={image.id}>
                <CollectionListItem
                  product={image}
                  isInCart={isItemInCart(image)}
                  onCartAdd={() => handleCartAdd(image)}
                  onCartRemove={() => handleCartRemove(image)}
                  onItemRemove={() => handleRemoveFromCollection(image)}
                  isItemInCollections={true}
                />
              </ImageListItem>
            ))}
          </Masonry>
        </InfiniteScroll>
      )}
    </Box>
  );
};

export default CollectionList;
