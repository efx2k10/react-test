import {ReviewForm} from "../ReviewForm/ReviewForm";
import {Rate} from "../Rate/Rate";
import {useMemo} from "react";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../store/restaurant/selectors";
import {Link, Outlet, useParams} from "react-router-dom";
import cn from "classnames";
import styles from "./styles.module.css";

export const Restaurant = () => {

    const {restaurantId, activeTab} = useParams();


    const restaurant = useSelector(state => selectRestaurantById(state, {restaurantId}))



    if (!restaurant) return null;


    /*
        const calculateRating = useMemo(() => {
            return Math.round(reviews.reduce((sum, {rating}) => (sum + rating), 0) / reviews.length);
        }, [reviews])
    */

    return (
        <div>
            <h2>{restaurant.name}</h2>
            {/*<Rate rating={calculateRating}/>*/}

            <Link to="" className={cn(styles.reviewTab,  {
                [styles.reviewTabActive]: activeTab !== "reviews"
            })}>
                Меню
            </Link>
            <Link to="reviews" className={cn(styles.reviewTab,  {
                [styles.reviewTabActive]: activeTab === "reviews"
            })}>
                Отзывы
            </Link>


            <Outlet/>
            <ReviewForm/>
        </div>
    )


};
