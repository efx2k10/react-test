import {useDispatch, useSelector} from "react-redux";
import {selectRestaurantDishIdsById} from "../../store/restaurant/selectors";
import {Dish} from "../Dish/Dish";
import {useEffect} from "react";
import {fetchDishesByRestaurantId} from "../../store/dish";
import {selectIsDishLoading} from "../../store/dish/selectors";
import {Preloader} from "../Preloader/Preloader";


export const Menu = ({restaurantId}) => {
    const isLoading = useSelector(selectIsDishLoading)
    const dispatch = useDispatch();
    const dishIds = useSelector((state) =>
        selectRestaurantDishIdsById(state, { restaurantId })
    );

    useEffect(() => {
        dispatch(fetchDishesByRestaurantId(restaurantId));
    }, [restaurantId, dispatch]);


    if (isLoading) return (<Preloader/>)


    return (
        <div>
            <h3>Меню</h3>
            {dishIds.map((dishId) => (
                <Dish dishId={dishId} key={dishId}/>
            ))}
        </div>
    )
};