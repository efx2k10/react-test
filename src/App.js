import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {Layout} from "./components/Layout/Layout/Layout";
import {RestaurantPage} from './pages/RestaurantPage/RestaurantPage';
import {IndexPage} from "./pages/IndexPage/IndexPage";
import {CartPage} from "./pages/CartPage/CartPage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import './App.css';
import {Restaurant} from "./components/Restaurant/Restaurant";


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Layout>
                    <Routes>
                        <Route index element={<IndexPage/>}/>
                        <Route path="/restaurants" element={<RestaurantPage/>}>
                            <Route path=":restaurantId" element={<Restaurant/>} />
                        </Route>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </Layout>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
