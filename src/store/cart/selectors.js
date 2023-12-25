export const selectCartModule = (state) => state.cart;

export const selectDishCountById = (state, {dishId}) =>  selectCartModule(state)[dishId];

export const selectCartDishIds = (state) => Object.keys(selectCartModule(state));

export const selectCartItemsCount = (state) => selectCartDishIds(state).length;


