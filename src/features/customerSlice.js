import { createSlice } from "@reduxjs/toolkit";

// create initial value
const initialState = {
    value: [],
};

export const customerSlice = createSlice({
    name: "customerSlc",
    initialState,
    reducers: {
        // a bunch of our states here
        addCustomer: (state, action) => {
            state.value.push(action.payload);
        },
        addFoodToCustomer: (state, action) => {
            state.value.forEach((customer) => {
                if (customer.id === action.payload.id) {
                    customer.food.push(action.payload.food);
                }
            });
        },
    },
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;
export default customerSlice.reducer;
