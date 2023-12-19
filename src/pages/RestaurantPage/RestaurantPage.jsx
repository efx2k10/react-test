import { Tabs } from "../../components/Tabs/Tabs"
import { Restaurant } from "../../components/Restaurant/Restaurant"
import { useState } from "react";


export const RestaurantPage = () => {

  const [restaurantId, setRestaurantId] = useState(null);

  return (
    <div>
      <h1>Страница Рестораны</h1>
      <Tabs
        onClick={setRestaurantId}
        activeId={restaurantId} />

        {restaurantId !==null && <Restaurant restaurantId={restaurantId} />}
    </div>
  );
};