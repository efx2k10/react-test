import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {LOADING_STATUSES} from "../../constants/loadingStatuses"
import {selectRestaurantIds} from "./selectors";
import {normalizer} from "../utils/normalizer";

const initialState = {
    entities: {},
    ids: [],
    status: LOADING_STATUSES.idle

}

export const fetchRestaurants = createAsyncThunk(
    'restaurant/fetchRestaurants',
    async (_, thunkAPI) => {
        const restaurantIds = selectRestaurantIds(thunkAPI.getState())

        if (restaurantIds?.length) return thunkAPI.rejectWithValue(LOADING_STATUSES.alreadyLoaded);

        const response = await fetch('http://localhost:3001/api/restaurants/');

        const restaurants = await response.json();

        return normalizer(restaurants);
    }
);

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    extraReducers: (builder) => builder
        .addCase(fetchRestaurants.pending, (state) => {
            state.status = LOADING_STATUSES.loading;
        })
        .addCase(fetchRestaurants.rejected, (state, {payload}) => {
            if (payload === LOADING_STATUSES.alreadyLoaded) {
                state.status = LOADING_STATUSES.success;
                return;
            }
            state.status = LOADING_STATUSES.failed;
        })
        .addCase(fetchRestaurants.fulfilled, (state, {payload}) => {
            state.status = LOADING_STATUSES.success;
            state.entities = payload.entities;
            state.ids = payload.ids;
        })
})