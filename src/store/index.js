import {configureStore} from "@reduxjs/toolkit";
import {cartSlice} from "./cart";
import {restaurantSlice} from "./restaurant";
import {dishSlice} from "./dish";
import {reviewSlice} from "./review";
import {userSlice} from "./user";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    restaurant: restaurantSlice.reducer,
    dish: dishSlice.reducer,
    review: reviewSlice.reducer,
    user: userSlice.reducer
})

export const store = configureStore(
    {
        reducer: rootReducer,
        devTools:true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([])
    }
)
