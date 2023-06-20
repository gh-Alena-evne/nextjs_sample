// eslint-disable-next-line @typescript-eslint/no-unused-vars,prettier/prettier
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line prettier/prettier
import {
  CartState,
  ICartItem,
  ProductUpdate,
  FillCreateOrderActionPayload,
  ProductPromptUpdate,
  FillDiscountActionPayload,
  IShippingAddress,
} from './typedefs';

const initialState: CartState = {
  isFetching: false,
  invoiceId: null,
  orderId: null,
  isOrderSaved: false,
  isOrderChanged: false,
  data: [],
  discount: null,
  email: '',
  coupon: '',
  address: {
    first_name: '',
    last_name: '',
    country: '',
    state: '',
    town: '',
    zip: '',
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    startFetching(state) {
      state.isFetching = true;
    },
    stopFetching(state) {
      state.isFetching = false;
    },
    addCartItem(state, action: PayloadAction<ICartItem>) {
      state.data = [...state.data, action.payload];
      if (state.isOrderSaved) {
        state.isOrderChanged = true;
      }
    },
    removeCartItem(state, action: PayloadAction<number>) {
      state.data = state.data.filter((cartItem) => {
        return cartItem.product.id !== action.payload;
      });
      if (!state.data) {
        state.discount = null;
      }
      if (state.isOrderSaved) {
        state.isOrderChanged = true;
      }
    },
    updateProduct(state, action: PayloadAction<ProductUpdate>) {
      state.data = state.data.map((cartItem) => {
        if (cartItem.product.id === action.payload.id) {
          return {
            product: cartItem.product,
            priceVariant: action.payload.priceVariant,
            prompt: action.payload.prompt,
          };
        } else {
          return cartItem;
        }
      });
    },
    updateProductPrompt(state, action: PayloadAction<ProductPromptUpdate>) {
      state.data = state.data.map((cartItem) => {
        if (cartItem.product.id === action.payload.id) {
          return {
            ...cartItem,
            product: cartItem.product,
            prompt: action.payload.prompt,
          };
        } else {
          return cartItem;
        }
      });
    },
    clearCart(state) {
      state.data = [];
      state.discount = null;
      state.orderId = null;
      state.invoiceId = null;
      state.isOrderSaved = false;
      state.coupon = '';
    },
    fillCreateOrder(
      state,
      action: PayloadAction<FillCreateOrderActionPayload>,
    ) {
      state.invoiceId = action.payload.invoice_id;
      state.orderId = action.payload.order_id;
      state.email = action.payload.email;
      state.coupon = action.payload.coupon;
    },
    fillDiscount(state, action: PayloadAction<FillDiscountActionPayload>) {
      state.discount = action.payload;
    },
    fillCoupon(state, action: PayloadAction<string>) {
      state.coupon = action.payload;
      state.isOrderSaved = false;
      state.isOrderChanged = true;
    },
    fillShippingAddress(state, action: PayloadAction<IShippingAddress>) {
      state.address = action.payload;
    },
    clearDiscount(state) {
      state.discount = null;
      state.coupon = '';
    },
    saveIsOrderSaved(state) {
      state.isOrderSaved = true;
      state.isOrderChanged = false;
    },
    // inject
  },
});

export default cartSlice;
