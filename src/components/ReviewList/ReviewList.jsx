import {Review} from "../Review/Review"
import styles from "./styles.module.css"
import {useSelector} from "react-redux";
import {selectRestaurantReviewIdsById} from "../../store/restaurant/selectors";

export const ReviewList = ({restaurantId}) => {

    const reviewIds = useSelector(state => selectRestaurantReviewIdsById(state, {restaurantId}))

    if (reviewIds.length < 1)
        return (
            <div className={styles.root}>Нет отзывов для показа</div>
        )

    return (
        <div className={styles.root}>
            <h4>Отзывы</h4>
            {
                reviewIds.map((reviewId) => (
                    <Review reviewId={reviewId} key={reviewId}/>
                ))
            }
        </div>
    );
};
