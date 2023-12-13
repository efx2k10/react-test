import { Tab } from "../Tab/Tab";
export const Tabs = ({ restaurants, onClick, restaurantIndex }) => {

  return (
    <div>
      {
        restaurants.map((restaurant, index) => (
          <Tab
            name={restaurant.name}
            onClick={() => onClick(index)}
            isActive={restaurantIndex === index}
            key={restaurant.id} />
        ))
      }
    </div>
  );
};