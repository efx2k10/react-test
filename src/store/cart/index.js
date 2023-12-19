import {CartActions} from "./actions";
const initialState = {}

export const cartReducer = (state = initialState, action) => {
    switch (action?.type) {
        case CartActions.AddDish : {
            return {
                ...state,
                [action.payload]: (state[action.payload] || 0) + 1,
            }
        }

        case CartActions.RemoveDish : {
            return {
                ...state,
                [action.payload]: state[action.payload] ? state[action.payload] - 1 : 0,
            }
        }

        default:
            return state
    }
}