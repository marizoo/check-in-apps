import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSlice";
import customerReducer from "../features/customerSlice";

export const store = configureStore({
    reducer: {
        //slices here
        reservationStr: reservationsReducer,
        customerStr: customerReducer,
    },
});
