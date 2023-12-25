import {Tab} from "../Tab/Tab";
import {useSelector} from "react-redux";
import {selectRestaurantFilteredIdsByName} from "../../store/restaurant/selectors";

import styles from "./styles.module.css";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";

export const Tabs = () => {
    const [search, setSearch] = useSearchParams('');
    const restaurantIds = useSelector(state => selectRestaurantFilteredIdsByName(state,
        {searchValue: search.get('restaurant_name') || ''}
    ))

    return (
        <div>
            <div className={styles.input}>
                <input
                    placeholder="поиск ..."
                    value={search.get('restaurant_name') || ''}
                    onChange={(event) => setSearch(
                        {restaurant_name: event.target.value})
                }
                />
            </div>
            <div className={styles.tabs}>
                {
                    restaurantIds.map((restaurantId) => (
                        <Tab restaurantId={restaurantId} key={restaurantId}/>
                    ))
                }
            </div>
        </div>
    );
};