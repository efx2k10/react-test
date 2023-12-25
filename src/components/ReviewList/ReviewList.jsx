import {Review} from "../Review/Review"
import styles from "./styles.module.css"
import {useDispatch, useSelector} from "react-redux";
import {selectIsReviewLoading} from "../../store/review/selectors";
import {useEffect} from "react";
import {Preloader} from "../Preloader/Preloader";
import {fetchReviewsByRestaurantId} from "../../store/review";
import {selectRestaurantReviewIdsById} from "../../store/restaurant/selectors";
import {useParams} from "react-router-dom";

export const ReviewList = () => {

    const {restaurantId} = useParams();
    /*
    const calculateRating = useMemo(() => {
        return Math.round(reviews.reduce((sum, {rating}) => (sum + rating), 0) / reviews.length);
    }, [reviews])
*/

    const isLoading = useSelector(selectIsReviewLoading);
    const dispatch = useDispatch();

    const reviewIds = useSelector((state) =>
        selectRestaurantReviewIdsById(state, {restaurantId})
    );

    useEffect(() => {
        dispatch(fetchReviewsByRestaurantId(restaurantId));
    }, [restaurantId, dispatch]);


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
