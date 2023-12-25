import {useSelector} from "react-redux";
import {selectCartItemsCount} from "../../store/cart/selectors";
import styles from "./styles.module.css"


export const CartCounter = () => {

    const productCount = useSelector(state => selectCartItemsCount(state))

    return (
        <span className={styles.cartCounter}>{productCount ? productCount : ""}</span>
    )
}