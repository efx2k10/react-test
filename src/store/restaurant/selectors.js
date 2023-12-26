import {LOADING_STATUSES} from "../../constants/loadingStatuses";
import {createSelector} from "@reduxjs/toolkit";
import {selectReviewEntities} from "../review/selectors";

export const selectRestaurantModule = (state) =>
    state.restaurant;

export const selectRestaurantEntities = (state) =>
    selectRestaurantModule(state).entities;

export const selectRestaurantIds = (state) =>
    selectRestaurantModule(state).ids;

export const selectRestaurantFilteredIdsByName =
    createSelector(
        [selectRestaurantEntities, (_, {searchValue}) => searchValue],
        (entities, searchValue) => Object.values(entities).reduce((acc, {id, name}) => {
            if (name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
                acc.push(id);
            return acc;
        }, [])
    )

export const selectRestaurantById = (state, {restaurantId}) =>
    selectRestaurantEntities(state)[restaurantId];

export const selectRestaurantDishIdsById = (state, {restaurantId}) =>
    selectRestaurantById(state, {restaurantId})?.menu;

export const selectRestaurantReviewIdsById = (state, {restaurantId}) =>
    selectRestaurantById(state, {restaurantId})?.reviews;


export const selectRestaurantRating = createSelector(
    [selectReviewEntities, selectRestaurantReviewIdsById],
    (entities, reviewIds) => {
        if (!reviewIds?.length) return 0;

        if (!reviewIds.every(id => entities[id])) return 0;

        return Math.round(reviewIds.reduce((sum, id) => (sum + entities[id].rating), 0) / reviewIds.length)
    })

export const selectRestaurantLoadingStatus = (state) => selectRestaurantModule(state).status;

export const selectIsRestaurantLoading = (state) => selectRestaurantLoadingStatus(state) === LOADING_STATUSES.loading;
