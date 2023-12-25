import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {LOADING_STATUSES} from "../../constants/loadingStatuses";
import {selectUserIds} from "./selectors";

export const fetchUsers = createAsyncThunk(
    "user/fetchUsers",
    async (_, {getState, rejectWithValue})  => {

        if (selectUserIds(getState()).length >0 )
            return rejectWithValue(LOADING_STATUSES.alreadyLoaded);

        const response = await fetch('http://localhost:3001/api/users/');

        return await response.json();
    }
)

const UserEntityAdapter = createEntityAdapter();

export const userSlice = createSlice({
    name: 'user',
    initialState: UserEntityAdapter.getInitialState({
        status: LOADING_STATUSES.idle,
    }),
    extraReducers: (builder) => builder
        .addCase(fetchUsers.pending, (state) => {
            state.status = LOADING_STATUSES.loading;
        })
        .addCase(fetchUsers.rejected, (state, {payload}) => {
            if (payload === LOADING_STATUSES.alreadyLoaded) {
                state.status = LOADING_STATUSES.success;
                return;
            }
            state.status = LOADING_STATUSES.failed;
        })
        .addCase(fetchUsers.fulfilled, (state, {payload}) => {
            state.status = LOADING_STATUSES.success;
            UserEntityAdapter.addMany(state, payload);
        })
})