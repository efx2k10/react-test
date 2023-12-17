import {Ingredient} from "../Ingredient/Ingredient";

export const Dish = ({dish}) => {
    return (
        <div>
            <div>{dish.name}</div>
            {dish.ingredients.map((ingredient) => (
                <Ingredient ingredient={ingredient} key={ingredient}/>
            ))}
        </div>
    )
};