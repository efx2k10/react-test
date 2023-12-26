import {createSelector} from "@reduxjs/toolkit";

export const selectCartModule = (state) => state.cart;

export const selectDishCountById = (state, {dishId}) =>  selectCartModule(state)[dishId];

export const selectCartDishIds =
    createSelector(
        [selectCartModule],
        (entities) => Object.keys(entities)
    )

export const selectCartItemsCount = (state) => selectCartDishIds(state).length;


