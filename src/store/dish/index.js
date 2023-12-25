import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {LOADING_STATUSES} from "../../constants/loadingStatuses"
import {selectDishIds} from "./selectors";
import {selectRestaurantDishIdsById} from "../restaurant/selectors";


export const fetchDishesByRestaurantId = createAsyncThunk(
    "dish/fetchDishesByRestaurantId",
    async (restaurantId, {getState, rejectWithValue})  => {
        const restaurantDishIds = selectRestaurantDishIdsById(getState(),{
            restaurantId
        });
        const dishIds = selectDishIds(getState());

        if (restaurantDishIds.every((id)=> dishIds.includes(id))) return rejectWithValue(LOADING_STATUSES.alreadyLoaded)

        const response = await fetch('http://localhost:3001/api/products?id=' + restaurantId);

        return await response.json();
    }
);

const dishEntityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dish',
    initialState: dishEntityAdapter.getInitialState({
        status: LOADING_STATUSES.idle,
    }),
    extraReducers: (builder) => builder
        .addCase(fetchDishesByRestaurantId.pending, (state) => {
            state.status = LOADING_STATUSES.loading;
        })
        .addCase(fetchDishesByRestaurantId.rejected, (state, {payload}) => {
            if (payload === LOADING_STATUSES.alreadyLoaded) {
                state.status = LOADING_STATUSES.success;
                return;
            }
            state.status = LOADING_STATUSES.failed;
        })
        .addCase(fetchDishesByRestaurantId.fulfilled, (state, {payload}) => {
            state.status = LOADING_STATUSES.success;
            dishEntityAdapter.addMany(state, payload);
        })
})
