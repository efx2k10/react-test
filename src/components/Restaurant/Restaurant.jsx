import { Menu } from "../Menu/Menu"
import { ReviewList } from "../ReviewList/ReviewList"

export const Restaurant = ({ restaurant }) => {

    return (
        <div>
            <h2>{restaurant.name}</h2>
            <Menu menu={restaurant.menu} />
            <ReviewList reviews={restaurant.reviews} />
        </div>
    )

};
