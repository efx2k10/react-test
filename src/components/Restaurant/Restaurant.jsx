import {Menu} from "../Menu/Menu"
import {ReviewList} from "../ReviewList/ReviewList"
import {ReviewForm} from "../ReviewForm/ReviewForm";
import {Rate} from "../Rate/Rate";
import {useMemo} from "react";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../store/restaurant/selectors";
import {useParams} from "react-router-dom";

export const Restaurant = () => {

    const {restaurantId} = useParams();

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
            <Menu restaurantId={restaurantId}/>
            <ReviewList restaurantId={restaurantId}/>
            <ReviewForm/>
        </div>
    )


};
