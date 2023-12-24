import {Tabs} from "../../components/Tabs/Tabs"
import {Restaurant} from "../../components/Restaurant/Restaurant"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsRestaurantLoading} from "../../store/restaurant/selectors";
import {fetchRestaurants} from "../../store/restaurant";


export const RestaurantPage = () => {


    const [restaurantId, setRestaurantId] = useState(null);
    const isLoading = useSelector(selectIsRestaurantLoading)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchRestaurants())
    }, [dispatch]);


    if (isLoading) return (<div>loading ...</div>)

    return (
        <div>
            <h1>Страница Рестораны</h1>
            <Tabs
                onClick={setRestaurantId}
                activeId={restaurantId}/>

            {restaurantId !== null && <Restaurant restaurantId={restaurantId}/>}
        </div>
    );
};