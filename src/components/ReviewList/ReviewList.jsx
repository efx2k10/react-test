import {Review} from "../Review/Review"
import styles from "./styles.module.css"

export const ReviewList = ({reviews}) => {

    if (reviews.length < 1)
        return (
            <div className={styles.root}>Нет отзывов для показа</div>
        )

    return (
        <div className={styles.root}>
            <h4>Отзывы</h4>
            {
                reviews.map((review) => (
                    <Review review={review} key={review.id}/>
                ))
            }
        </div>
    );
};
