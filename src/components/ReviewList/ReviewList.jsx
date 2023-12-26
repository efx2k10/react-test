import {Review} from "../Review/Review"
import {useSelector} from "react-redux";
import {selectIsReviewLoading} from "../../store/review/selectors";
import {Preloader} from "../Preloader/Preloader";
import {selectRestaurantReviewIdsById} from "../../store/restaurant/selectors";
import {useParams} from "react-router-dom";

import styles from "./styles.module.css"

export const ReviewList = () => {

    const {restaurantId} = useParams();
    /*
    const calculateRating = useMemo(() => {
        return Math.round(reviews.reduce((sum, {rating}) => (sum + rating), 0) / reviews.length);
    }, [reviews])
*/

    const isLoading = useSelector(selectIsReviewLoading);

    const reviewIds = useSelector((state) =>
        selectRestaurantReviewIdsById(state, {restaurantId})
    );

    if (isLoading) return (<Preloader/>)

    if (reviewIds.length < 1)
        return (
            <div className={styles.root}>Нет отзывов для показа</div>
        )

    return (
        <div className={styles.root}>
            <h3>Отзывы</h3>
            {
                reviewIds.map((reviewId) => (
                    <Review reviewId={reviewId} key={reviewId}/>
                ))
            }
        </div>
    );
};
