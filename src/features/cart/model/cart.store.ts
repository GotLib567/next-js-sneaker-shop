import { createStore } from "zustand";

type CartStoreState = {
    productIds: number[],
    addToCart: (id: number) => void,
    deleteFromCart: (id: number) => void,
}

export const useCartStore = createStore<CartStoreState>((set) => ({
    productIds: [],
    addToCart: (id) => set((state) => ({ 
        productIds: [...state.productIds, id]
    })),
    deleteFromCart: (id) => set((state) => ({
        productIds: state.productIds.filter((productId) => productId !== id)
    })),
}));