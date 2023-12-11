import './App.css';

import { restaurants } from "./constants/fixtures"

function App() {

  return (
    <div className="App">
      {
        restaurants?.map((restaurant) => (
          <div key={restaurant.id}>

            <h2>{restaurant.name}</h2>

            {restaurant.menu.length > 0 && (
              <ul>
                {restaurant.menu.map((dish) => (
                  <li key={dish.id}>{dish.name}</li>
                ))}
              </ul>

            )}

            {restaurant.reviews.length > 0 && (
              <ul>
                {restaurant.reviews.map((review) => (
                  <li key={review.id}>{review.user} : {review.text}</li>
                ))}
              </ul>

            )}

          </div>
        ))
      }

    </div>
  );
}

export default App;
