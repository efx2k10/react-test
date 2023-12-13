import {Menu} from "../Menu/Menu"
import {ReviewList} from "../ReviewList/ReviewList"
import {ReviewForm} from "../ReviewForm/ReviewForm";
import {Rate} from "../Rate/Rate";
import {useMemo} from "react";

export const Restaurant = ({restaurant}) => {

    const {name, menu, reviews} = restaurant;

    const calculateRating = useMemo(() => {
        return Math.round(reviews.reduce((sum, {rating}) => (sum + rating), 0) / reviews.length);
    }, [reviews])

    return (
        <div>
            <h2>{name}</h2>
            <Rate rating={calculateRating}/>
            <Menu menu={menu}/>
            <ReviewList reviews={reviews}/>
            <ReviewForm/>
        </div>
    )

};
