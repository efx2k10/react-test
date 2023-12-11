import { Review } from "../Review/Review"
export const ReviewList = ({ reviews }) => {

    if (reviews.length < 1)
        return (
            <div>Нет отзывов для показа</div>
        )

    return (
        <div>
            <h4>Отзывы</h4>
            {
                reviews.map((review) => (
                    <Review review={review} key={review.id}/>
                ))
            }
        </div>
    );
};
