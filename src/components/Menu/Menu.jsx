import { Dish } from "../Dish/Dish"

export const Menu = ({ menu }) => {

    if (menu.length === 0)
        return (
            <div>Нет данных меню</div>
        )

    return (
        <div>
            <h3>Меню</h3>
            {menu.map((dish) => (
                <Dish dish={dish} key={dish.id} />
            ))}
        </div>
    )

};