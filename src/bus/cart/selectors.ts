import { createSelector } from 'reselect';
import { RootState } from '@setup/typedefs';

const cartSelector = (state: RootState) => state.cart;

export const getCart = createSelector([cartSelector], (result) => {
  return result;
});

export const getCartTotal = createSelector([cartSelector], (result) => {
  return result.data.length;
});

export const getCartSubTotalPrice = createSelector([cartSelector], (result) => {
  return result.data.reduce((previousValue, cartItem) => {
    if (cartItem.priceVariant) {
      return previousValue + cartItem.priceVariant.amount;
    }

    return previousValue;
  }, 0);
});

export const getCartTotalPrice = createSelector([cartSelector], (result) => {
  let total = result.data.reduce((previousValue, cartItem) => {
    if (cartItem.priceVariant) {
      return previousValue + cartItem.priceVariant.amount;
    }

    return previousValue;
  }, 0);
  if (result.discount?.success && result.discount.data?.type === 'percent') {
    total = total - total * (result.discount?.data.value / 100);
  }
  if (result.discount?.success && result.discount.data?.type === 'fixed') {
    total = total - result.discount.data.value;
  }

  return total <= 0.02 ? 0 : +total.toFixed(2);
});

export const getProduct = (id: number) =>
  createSelector([cartSelector], (result) => {
    return result.data.find((cartItem) => cartItem.product.id === id);
  });

export const getPriceVariants = (id: number) =>
  createSelector([cartSelector], (result) => {
    return result.data.find((cartItem) => cartItem.product.id === id)
      ?.priceVariant?.id;
  });

export const getOrderId = createSelector([cartSelector], (result) => {
  return result.orderId;
});

export const getInvoiceId = createSelector([cartSelector], (result) => {
  return result.invoiceId;
});

export const getDiscount = createSelector([cartSelector], (result) => {
  return result.discount;
});

export const getCoupon = createSelector([cartSelector], (result) => {
  return result.coupon;
});

export const getIsOrderSaved = createSelector([cartSelector], (result) => {
  return result.isOrderSaved;
});

export const getIsPosterPaymentType = createSelector(
  [cartSelector],
  (result) => {
    return result.data.some((item) => item.priceVariant?.id === 5);
  },
);

export const getShippingAddress = createSelector([cartSelector], (result) => {
  return result.address;
});

export const getShippingAddressString = createSelector(
  [cartSelector],
  ({ address }) => {
    const valuesLength = Object.values(address).join('');
    const { first_name, last_name, country, state, town, zip } = address;

    return valuesLength
      ? `${first_name} ${last_name}, ${country}, ${state}, ${town}, ${zip}`
      : '';
  },
);
