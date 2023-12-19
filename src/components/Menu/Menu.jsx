import {useSelector} from "react-redux";
import {selectRestaurantDishIdsById} from "../../store/restaurant/selectors";
import {Dish} from "../Dish/Dish";


export const Menu = ({restaurantId}) => {
    const dishIds = useSelector(state => selectRestaurantDishIdsById(state, {restaurantId}))

    if (!dishIds) return null;

    return (
        <div>
            <h3>Меню</h3>
            {dishIds.map((dishId) => (
                <Dish dishId={dishId} key={dishId}/>
            ))}
        </div>
    )
};