import {Ingredient} from "../Ingredient/Ingredient";
import {useSelector, useDispatch} from "react-redux";
import {selectDishCountById} from "../../store/cart/selectors";

import styles from "./styles.module.css"
import {selectDishById} from "../../store/dish/selectors";
import {cartSlice} from "../../store/cart";
import {Button} from "../Button/Button";

export const Dish = ({dishId}) => {

    const count = useSelector((state) => selectDishCountById(state, {dishId: dishId}) || 0)
    const dish = useSelector((state) => selectDishById(state, {dishId: dishId}))

    const dispatch = useDispatch();

    if (!dish) return null;

    const decrement = () => dispatch(cartSlice.actions.removeDish(dishId))
    const increment = () => dispatch(cartSlice.actions.addDish(dishId))


    return (
        <div className={styles.pan}>
            <div className={styles.dish_pan}>
                <div className={styles.title}>{dish.name}</div>
                <div>
                    <Button className={styles.button} onClick={decrement}>-</Button>
                    {count}
                    <Button className={styles.button} onClick={increment}>+</Button>
                </div>
            </div>

            {count > 0 && dish.ingredients.map((ingredient) => (
                    <Ingredient ingredient={ingredient} key={ingredient}/>
                )
            )}
        </div>
    )
};