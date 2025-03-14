import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'carSlice',
    initialState: {
        items: ["banana", "apple"],
    },
    reducers: {
        additem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

export const {addItem} = cartSlice.actions; 
export default cartSlice.reducer;