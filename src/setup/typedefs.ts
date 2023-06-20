import { AuthState } from '@bus/auth/typedefs';
import { CartState } from '@bus/cart/typedefs';
import { OrdersState } from '@bus/orders/typedefs';
import { ProductState } from '@bus/product/typedefs';
import { UiState } from '@bus/ui/typedefs';
// imports
import { PayloadAction } from '@reduxjs/toolkit';

export type PromiseResolve = (value?: unknown) => void;
export type PromiseReject = (reason?: any) => void;

export type ResolveReject = {
  resolve: PromiseResolve;
  reject: PromiseReject;
};

export type OnFormSubmitPayload = {
  resolve: PromiseResolve;
  reject: PromiseReject;
  values: any;
};

export type OnFormSubmit = (payload: OnFormSubmitPayload) => void;

export type PayloadActionWithPromiseMeta<T> = PayloadAction<
  T,
  string,
  ResolveReject
>;

export type RootState = {
  ui: UiState;
  product: ProductState;
  cart: CartState;
  auth: AuthState;
  orders: OrdersState;
  // inject
};

export type Subset<K> = {
  [attr in keyof K]?: K[attr] extends object ? Subset<K[attr]> : K[attr];
};

export type Nullable<T> = T | null;

/////////////////////////

export const emptyPaginationState: unknown = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};
