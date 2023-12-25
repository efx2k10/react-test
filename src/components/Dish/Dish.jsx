import {Ingredient} from "../Ingredient/Ingredient";
import {useSelector, useDispatch} from "react-redux";
import {Button} from "../Button/Button";
import {selectDishCountById} from "../../store/cart/selectors";

import styles from "./styles.module.css"
import {selectDishById} from "../../store/dish/selectors";
import {cartSlice} from "../../store/cart";

export const Dish = ({dishId}) => {

    const count = useSelector((state) => selectDishCountById(state, {dishId: dishId}) || 0)
    const dish = useSelector((state) => selectDishById(state, {dishId: dishId}))

    const dispatch = useDispatch();

    if (!dish) return null;

    const decrement = () => dispatch(cartSlice.actions.removeDish(dish.id))
    const increment = () => dispatch(cartSlice.actions.addDish(dish.id))


    return (
        <div className={styles.pan}>
            <div className={styles.dish_pan}>
                <div className={styles.title}>{dish.name}</div>
                <Button className={styles.button} onClick={decrement}>-</Button>
                {count}
                <Button className={styles.button} onClick={increment}>+</Button>
            </div>

            {count > 0 && dish.ingredients.map((ingredient) => (
                    <Ingredient ingredient={ingredient} key={ingredient}/>
                )
            )}
        </div>
    )
};