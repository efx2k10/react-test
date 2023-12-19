export const selectRestaurantModule = (state) =>
    state.restaurant;

export const selectRestaurantEntities = (state) =>
    selectRestaurantModule(state).entities;

export const selectRestaurantIds = (state) =>
    selectRestaurantModule(state).ids;

export const selectRestaurantById = (state, {restaurantId}) =>
    selectRestaurantEntities(state)[restaurantId];

export const selectRestaurantDishIdsById = (state, {restaurantId}) =>
    selectRestaurantById(state, {restaurantId})?.menu;

export const selectRestaurantReviewIdsById = (state, {restaurantId}) =>
    selectRestaurantById(state, {restaurantId})?.reviews;
