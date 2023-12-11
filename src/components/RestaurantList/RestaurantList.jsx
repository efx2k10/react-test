import { Restaurant } from "../Restaurant/Restaurant"
export const RestaurantList = ({ restaurants }) => {

    if (restaurants.length < 1)
        return (
            <div>Нет ресторанов для показа</div>
        )

    return (
        <div>
            {restaurants.map((restaurant) => (
                <Restaurant restaurant={restaurant} key={restaurant.id} />
            ))}
        </div>
    );
};
