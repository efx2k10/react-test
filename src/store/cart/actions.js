export const CartActions = {
    AddDish: 'cart/addDish',
    RemoveDish: 'cart/removeDish',
}

export const addDish = (dishId) => (
    {
        type: CartActions.AddDish,
        payload: dishId
    })

export const removeDish = (dishId) => (
    {
        type: CartActions.RemoveDish,
        payload: dishId
    })

