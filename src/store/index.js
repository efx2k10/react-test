import {combineReducers, createStore} from "redux";
import {cartReducer} from "./cart";
import {restaurantReducer} from "./restaurant";
import {dishReducer} from "./dish";
import {reviewReducer} from "./review";
import {userReducer} from "./user";

const rootReducer = combineReducers({
    cart: cartReducer,
    restaurant: restaurantReducer,
    dish: dishReducer,
    review: reviewReducer,
    user: userReducer
})

export const store = createStore(rootReducer)
