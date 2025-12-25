import { create } from "zustand";

type ItemStoreEntity = {
    id: string,
    size: number,
}

type CartStoreState = {
    items: ItemStoreEntity[],
    addToCart: (id: string, size: number) => void,
    removeFromCart: (id: string) => void,
}

export const useCartStore = create<CartStoreState>((set) => ({
    items: [],
    addToCart: (id, size) => set((state) => ({
        items: [...state.items, { id, size }]
    })),
    removeFromCart: (id) => set((state) => ({
        items: state.items.filter((item) => item.id !== id)
    })),
}));