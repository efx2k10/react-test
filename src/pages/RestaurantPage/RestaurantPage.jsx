import { Tabs } from "../../components/Tabs/Tabs"
import { Restaurant } from "../../components/Restaurant/Restaurant"
import { useState } from "react";


export const RestaurantPage = ({ restaurants }) => {

  const [restaurantIndex, setRestaurantIndex] = useState(0);

  return (
    <div>
      <h1>Страница Рестораны</h1>
      <Tabs
        restaurants={restaurants}
        onClick={setRestaurantIndex}
        restaurantIndex={restaurantIndex} />

      <Restaurant restaurant={restaurants[restaurantIndex]} />
    </div>
  );
};