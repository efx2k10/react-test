import cn from 'classnames';
import styles from "./styles.module.css"
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../store/restaurant/selectors";
import {NavLink} from "react-router-dom";

export const Tab = ({restaurantId, classNames}) => {

    const restaurant = useSelector(state => selectRestaurantById(state, {restaurantId}))

    return (
        <NavLink to={restaurantId} className={({isActive}) =>
            cn(classNames,
                styles.root,
                {
                    [styles.active]: isActive,
                }
            )
        }>
            <span>{restaurant.name}</span>
        </NavLink>

    );
};