import {Ingredient} from "../Ingredient/Ingredient";
import {useSelector, useDispatch} from "react-redux";
import {addDish, removeDish} from "../../store/cart/actions";
import {Button} from "../Button/Button";
import {selectDishCountById} from "../../store/cart/selectors";

import styles from "./styles.module.css"
import {selectDishById} from "../../store/dish/selectors";

export const Dish = ({dishId}) => {

    const count = useSelector((state) => selectDishCountById(state, {dishId: dishId}) || 0)
    const dish = useSelector((state) => selectDishById(state, {dishId: dishId}))

    const dispatch = useDispatch();

    if (!dish) return null;

    const decrement = () => dispatch(removeDish(dishId))
    const increment = () => dispatch(addDish(dishId))


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