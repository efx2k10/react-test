import {LOADING_STATUSES} from "../../constants/loadingStatuses";

export const selectUserModule = (state) => state.user;

export const selectUserEntities = (state) =>
    selectUserModule(state).entities;

export const selectUserIds = (state) =>
    selectUserModule(state).ids;


export const selectUserById = (state, {userId}) =>  selectUserEntities(state)[userId];


export const selectUserLoadingStatus = (state) => selectUserModule(state).status;

export const selectIsUSerLoading = (state) => selectUserLoadingStatus(state) === LOADING_STATUSES.loading;


