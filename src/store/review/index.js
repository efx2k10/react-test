import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {selectRestaurantReviewIdsById} from "../restaurant/selectors";
import {LOADING_STATUSES} from "../../constants/loadingStatuses";
import {selectReviewIds} from "./selectors";

export const fetchReviewsByRestaurantId = createAsyncThunk(
    "dish/fetchReviewsByRestaurantId",
    async (restaurantId, {getState, rejectWithValue})  => {
        const restaurantReviewIds = selectRestaurantReviewIdsById(getState(),{
            restaurantId
        });
        const reviewIds = selectReviewIds(getState());

        if (restaurantReviewIds.every((id)=> reviewIds.includes(id))) return rejectWithValue(LOADING_STATUSES.alreadyLoaded)

        const response = await fetch('http://localhost:3001/api/reviews?restaurantId=' + restaurantId);

        return await response.json();
    }
);

const ReviewEntityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
    name: 'review',
    initialState: ReviewEntityAdapter.getInitialState({
        status: LOADING_STATUSES.idle,
    }),
    extraReducers: (builder) => builder
        .addCase(fetchReviewsByRestaurantId.pending, (state) => {
            state.status = LOADING_STATUSES.loading;
        })
        .addCase(fetchReviewsByRestaurantId.rejected, (state, {payload}) => {
            if (payload === LOADING_STATUSES.alreadyLoaded) {
                state.status = LOADING_STATUSES.success;
                return;
            }
            state.status = LOADING_STATUSES.failed;
        })
        .addCase(fetchReviewsByRestaurantId.fulfilled, (state, {payload}) => {
            state.status = LOADING_STATUSES.success;
            ReviewEntityAdapter.addMany(state, payload);
        })
})