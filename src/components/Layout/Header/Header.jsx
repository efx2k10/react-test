import {NavLink} from "react-router-dom";
import styles from "./styles.module.css"
import cn from 'classnames';
import {CartCounter} from "../../CartCounter/CartCounter";


export const Header  = ({className}) => {
    return (
        <div className={cn(className, styles.root)}>
            <div className={styles.topLogo}>
            <NavLink to="/" className={styles.logoLink}>
                LOGO
            </NavLink>
            </div>
            <div className={styles.topMenu}>
                <NavLink to="/restaurants" className={cn(styles.topMenuLink, styles.topMenuItem)}>
                    Рестораны
                </NavLink>
                <NavLink to="/cart" className={cn(styles.topMenuLink, styles.topMenuItem)}>
                    Корзина
                    <CartCounter/>
                </NavLink>
            </div>

        </div>
    )
}