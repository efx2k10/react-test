import {Menu} from "../Menu/Menu"
import {ReviewList} from "../ReviewList/ReviewList"
import {Rate} from "../Rate/Rate";

export const Restaurant = ({ restaurant }) => {

    const {name, menu, reviews} = restaurant;

    const calculateRating = (reviews) => {
        return Math.round(reviews.reduce((sum, {rating}) => (sum + rating), 0) / reviews.length);
    }

    return (
        <div>
            <h2>{name}</h2>
            <Rate rating={calculateRating(reviews)}/>
            <Menu menu={menu} />
            <ReviewList reviews={reviews} />
        </div>
    )

};
