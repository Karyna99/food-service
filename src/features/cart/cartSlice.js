import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "products",
    initialState: {
        cart: [],
        collection: {
            id: "",
            category: "",
            name: "",
            price: 0,
            source: "",
        },
    },
    reducers: {
        addToCart: (state, action) => {
            state.id = action.payload.id;
            state.category = action.payload.category;
            state.name = action.payload.name;
            state.price = action.payload.price;
            state.source = action.payload.source;
            state.cart = ["hello"];
        },
        removeFromCart: ({ cart }, { payload: id }) => {
            const index = cart.findIndex(product => product.id === id);
            cart.splice(index, 1);
        }
    }
});

export default cartSlice.reducer;

export const {
    addToCart,
    removeFromCart,
} = cartSlice.actions;

export const selectCart = state => state.cart;