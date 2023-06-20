import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from '@bus/auth/slice';
import cartSlice from '@bus/cart/slice';
import ordersSlice from '@bus/orders/slice';
import productSlice from '@bus/product/slice';
import uiSlice from '@bus/ui/slice';

// imports

const persistConfig = {
  key: 'primary',
  storage,
};
export const rootReducer = combineReducers({
  orders: ordersSlice.reducer,
  auth: authSlice.reducer,
  cart: persistReducer(persistConfig, cartSlice.reducer),
  product: productSlice.reducer,
  ui: uiSlice.reducer,
});

export default rootReducer;

export type AppStateType = ReturnType<typeof rootReducer>;
