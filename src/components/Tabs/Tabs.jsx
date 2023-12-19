import {Tab} from "../Tab/Tab";
import {useSelector} from "react-redux";
import {selectRestaurantIds} from "../../store/restaurant/selectors";

export const Tabs = ({onClick, activeId}) => {

    const restaurantIds = useSelector(state => selectRestaurantIds(state))

    return (
        <div>
            {
                restaurantIds.map((restaurantId) => (
                    <Tab
                        restaurantId={restaurantId}
                        onClick={() => onClick(restaurantId)}
                        isActive={restaurantId === activeId}
                        key={restaurantId}/>
                ))
            }
        </div>
    );
};