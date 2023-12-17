import {Button} from "../Button/Button";
import useValue from "../../hooks/useValue";
import styles from "./styles.module.css"

export const Ingredient = ({ingredient}) => {
    const {amount, decrement, increment} = useValue(0);

    return (
        <div className={styles.item}>
            <div className={styles.left}>{ingredient}</div>
            <div className={styles.right}>
                <Button className={styles.button} onClick={decrement}>-</Button>
                <span>{amount}</span>
                <Button className={styles.button} onClick={increment}>+</Button>
            </div>

        </div>
    )
}