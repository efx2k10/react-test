import {CartCounter} from "../../components/CartCounter/CartCounter";
import {useNavigate} from "react-router-dom";

export const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>404</h1>
            <div>
                <CartCounter onClick={() => navigate('/', {replace: true})}>
                    На главную страницу
                </CartCounter>
            </div>
        </div>
    );
};