import {Rate} from "../Rate/Rate";
import {useSelector} from "react-redux";
import {selectReviewById} from "../../store/review/selectors";
import {selectUserById} from "../../store/user/selectors";
import {UserIcon} from "../UserIcon/UserIcon";

export const Review = ({reviewId}) => {

    const review = useSelector(state => selectReviewById(state, {reviewId}))

    if (!review) return null;

    return (
        <div>
            <div>
                <UserIcon userId={review.userId}/>
                {review.text}
            </div>
            <Rate rating={review.rating}/>
        </div>
    );
};
