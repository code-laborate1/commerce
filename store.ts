import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AddCartType } from './types/AddCartType';
import { it } from 'node:test';

type CartState = {
  isOpen: boolean;
  cart: AddCartType[];
  toggleCart: () => void;
  addProduct: (item: AddCartType) => void;
  removeProduct: (item: AddCartType) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    set => ({
      cart: [],
      isOpen: false,
      toggleCart: () => set(state => ({ isOpen: !state.isOpen })),
      addProduct: item =>
        set(state => {
          const existingItem = state.cart.find(
            cartItem => cartItem.id === item.id
          );
          if (existingItem) {
            const updatedCart = state.cart.map(cartItem => {
              if (cartItem.id === item.id) {
                return {
                  ...cartItem,
                  quantity: (cartItem.quantity as number) + 1
                };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
          }
        }),
      removeProduct: item =>
        set(state => {
          // check if the item exists and remove qty - 1
          const existingItem = state.cart.find(
            cartItem => cartItem.id === item.id
          );
          if (existingItem && existingItem.quantity! > 1) {
            const updatedCart = state.cart.map(cartItem => {
              if (cartItem.id === item.id) {
                return {
                  ...cartItem,
                  quantity: (cartItem.quantity as number) - 1
                };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            // if the item does not exist, remove it from the cart
            const filteredCart = state.cart.filter(
              cartItem => cartItem.id !== item.id
            );
            return { cart: filteredCart };
          }
        })
    }),
    { name: 'cart-store' }
  )
);
