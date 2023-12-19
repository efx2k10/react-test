export const selectCartModule = (state) => state.cart;

export const selectDishCountById = (state, {dishId}) =>  selectCartModule(state)[dishId];

