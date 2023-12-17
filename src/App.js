import { RestaurantPage } from './pages/RestaurantPage/RestaurantPage';
import { restaurants } from "./constants/fixtures"
import './App.css';
import {Layout} from "./components/Layout/Layout/Layout";


function App() {
  return (
    <Layout>
      <RestaurantPage restaurants = {restaurants}/>
    </Layout>
  );
}

export default App;
