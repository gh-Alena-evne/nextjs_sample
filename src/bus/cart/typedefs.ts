//state type____________________________________
import { PriceVariant, Product } from '@bus/product/typedefs';

export type CartState = {
  isFetching: boolean;
  data: ICartItem[];
  invoiceId: null | string;
  orderId: null | number;
  isOrderSaved: boolean;
  isOrderChanged: boolean;
  email: string;
  coupon: string;
  address: IShippingAddress;
  discount: Discount | null;
};

//payload types_________________________________
export type FillDiscountActionPayload = Discount;

export type ChangeOrderActionPayload = {};

export type FillCreateOrderActionPayload = {
  invoice_id: string;
  order_id: number;
  email: string;
  coupon: string;
  shipping_address: IShippingAddress;
};

export type ProductUpdate = {
  id: number;
  priceVariant: PriceVariant | null;
  prompt?: string;
};

export type Discount = {
  success: boolean;
  message: string;
  data?: {
    type: string;
    value: number;
  };
};

export type ProductPromptUpdate = {
  id: number;
  prompt?: string;
};
//common types__________________________________
export interface ICartItem {
  product: Product;
  priceVariant: PriceVariant | null;
  prompt?: string;
}
export interface IShippingAddress {
  first_name: string;
  last_name: string;
  country: string;
  state: string;
  town: string;
  zip: string;
}
