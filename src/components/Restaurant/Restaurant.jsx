import {ReviewForm} from "../ReviewForm/ReviewForm";
import {Rate} from "../Rate/Rate";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectRestaurantById, selectRestaurantRating} from "../../store/restaurant/selectors";
import {Link, Outlet, useParams} from "react-router-dom";
import {fetchReviewsByRestaurantId} from "../../store/review";
import cn from "classnames";
import styles from "./styles.module.css";


export const Restaurant = () => {
    const dispatch = useDispatch();
    const {restaurantId, activeTab} = useParams();
    const restaurant = useSelector(state => selectRestaurantById(state, {restaurantId}));
    const rating = useSelector(state => selectRestaurantRating(state, {restaurantId}));


    useEffect(() => {
        dispatch(fetchReviewsByRestaurantId(restaurantId));
    }, [restaurantId, dispatch]);

    if (!restaurant) return null;


    return (
        <div>
            <h2>{restaurant.name}</h2>
            <Rate rating={rating} size="l"/>

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
