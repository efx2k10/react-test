import {LOADING_STATUSES} from "../../constants/loadingStatuses";

export const selectReviewModule = (state) => state.review;

export const selectReviewEntities = (state) =>
    selectReviewModule(state).entities;

export const selectReviewIds = (state) =>
    selectReviewModule(state).ids;

export const selectReviewById = (state, {reviewId}) =>  selectReviewEntities(state)[reviewId];

export const selectReviewUserIdById = (state, {reviewId}) =>  selectReviewById(state, {reviewId}).userId;

export const selectReviewLoadingStatus = (state) => selectReviewModule(state).status;

export const selectIsReviewLoading = (state) => selectReviewLoadingStatus(state) === LOADING_STATUSES.loading;