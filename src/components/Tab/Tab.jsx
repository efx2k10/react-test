import { Button } from "../Button/Button";
import cn from 'classnames';
import styles from "./styles.module.css"
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../store/restaurant/selectors";

export const Tab = ({ restaurantId, onClick, isActive }) => {

    const restaurant = useSelector(state => selectRestaurantById(state, {restaurantId}))

    return (
        <Button className={cn(styles.root, {[styles.active]: isActive })} onClick={onClick} >
            <span>{restaurant.name}</span>
        </Button>
    );
};