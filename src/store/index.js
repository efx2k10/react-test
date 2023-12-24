import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./cart";
import {restaurantSlice} from "./restaurant";
import {dishReducer} from "./dish";
import {reviewReducer} from "./review";
import {userReducer} from "./user";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    cart: cartReducer,
    restaurant: restaurantSlice.reducer,
    dish: dishReducer,
    review: reviewReducer,
    user: userReducer
})

export const store = configureStore(
    {
        reducer: rootReducer,
        devTools:true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([])
    }
)
