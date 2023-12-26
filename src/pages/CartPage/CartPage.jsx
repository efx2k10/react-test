import {useSelector} from "react-redux";
import {selectCartDishIds} from "../../store/cart/selectors";
import {Dish} from "../../components/Dish/Dish";

export const CartPage = () => {
    const dishIds = useSelector(selectCartDishIds);

    if (!dishIds?.length) return (
        <div>Корзина пуста</div>
    );

    return (
        <div>
            <h1>Ваш заказ</h1>
            {dishIds.map((dishId) => (
                <Dish dishId={dishId} key={dishId}/>
            ))}
        </div>
    );
};