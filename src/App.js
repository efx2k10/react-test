import './App.css';
import { RestaurantList } from "./components/RestaurantList/RestaurantList"

import { restaurants } from "./constants/fixtures-empty"

function App() {

  return (
    <div className="App">
      <h1>Рестораны</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export default App;
