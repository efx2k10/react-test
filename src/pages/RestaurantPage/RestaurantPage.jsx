import {Tabs} from "../../components/Tabs/Tabs"
import {Restaurant} from "../../components/Restaurant/Restaurant"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsRestaurantLoading} from "../../store/restaurant/selectors";
import {fetchRestaurants} from "../../store/restaurant";
import {Preloader} from "../../components/Preloader/Preloader";
import {Outlet} from "react-router-dom";


export const RestaurantPage = () => {

    const isLoading = useSelector(selectIsRestaurantLoading)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchRestaurants())
    }, [dispatch]);


    if (isLoading) return (<Preloader/>)

    return (
        <div>
            <h1>Страница Рестораны</h1>
            <Tabs/>
            <Outlet/>

           {/* {restaurantId !== null && <Restaurant restaurantId={restaurantId}/>}*/}
        </div>
    );
};