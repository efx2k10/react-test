import { RestaurantPage } from './pages/RestaurantPage/RestaurantPage';
import { restaurants } from "./constants/fixtures"
import './App.css';


function App() {

  return (
    <div className="App">
      <RestaurantPage restaurants = {restaurants}/>
    </div>
  );
}

export default App;
