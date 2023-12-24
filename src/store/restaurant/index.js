import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {LOADING_STATUSES} from "../../constants/loadingStatuses"
import {selectRestaurantIds} from "./selectors";

const initialState = {
    entities: {},
    ids: [],
    status: LOADING_STATUSES.idle

}

const fetchRestaurants = createAsyncThunk(
    'restaurant/fetchRestaurants',
    async (_, thunkAPI)=> {
        const restaurantIds = selectRestaurantIds(thunkAPI.getState())

        if (restaurantIds?.length) return thunkAPI.rejectWithValue(LOADING_STATUSES.alreadyLoaded);

        const response = await fetch('http://localhost:3001/api/restaurants/');

        const restaurants = await  response.json();

        return restaurants;
    }
);

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.status = LOADING_STATUSES.loading;
        },
        failLoading: (state) => {
            state.status = LOADING_STATUSES.failed;
        },
        finishLoading: (state, {payload: {entities, ids}}) => {
            state.status = LOADING_STATUSES.success;
            state.entities = entities;
            state.ids = ids;
        },

    }
})