import useValue from "../../hooks/useValue";
import styles from "./styles.module.css"
import {Button} from "../Button/Button";

export const Ingredient = ({ingredient}) => {
    const {amount, decrement, increment} = useValue(1);

    return (
        <div className={styles.item}>
            <div>{ingredient}</div>
            <div>
                <Button className={styles.button} onClick={decrement}>-</Button>
                <span>{amount}</span>
                <Button className={styles.button} onClick={increment}>+</Button>
            </div>

        </div>
    )
}