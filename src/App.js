import { RestaurantPage } from './pages/RestaurantPage/RestaurantPage';
import './App.css';
import {Layout} from "./components/Layout/Layout/Layout";
import {Provider} from "react-redux";
import {store} from "./store";


function App() {
  return (
      <Provider store={store}>
          <Layout>
              <RestaurantPage/>
          </Layout>
      </Provider>

  );
}

export default App;
