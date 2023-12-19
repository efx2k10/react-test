import {Rate} from "../Rate/Rate";
import {useSelector} from "react-redux";
import {selectReviewById} from "../../store/review/selectors";
import {selectUserById} from "../../store/user/selectors";

export const Review = ({reviewId}) => {

    const review = useSelector(state => selectReviewById(state, {reviewId}))



    const userId = review.userId
    const user = useSelector(state => selectUserById(state, {userId}))

    if (!review) return null;

    return (
        <div>
            <div>
                {user.name} : {review.text}
            </div>
            <Rate rating={review.rating}/>
        </div>
    );
};
