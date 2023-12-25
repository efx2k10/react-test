import {createSlice} from "@reduxjs/toolkit";
const initialState = {}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addDish: (state, {payload}) => {
            state[payload] = (state[payload] || 0) + 1
        },
        removeDish: (state, {payload}) => {
            state[payload] = state[payload] ? state[payload] - 1 : 0
        },
    }
})
