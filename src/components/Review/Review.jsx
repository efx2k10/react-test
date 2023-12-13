import {Rate} from "../Rate/Rate";

export const Review = ({review}) => {

    return (
        <div>
            <div>
                {review.user} : {review.text}
            </div>
            <Rate rating={review.rating}/>
        </div>
    );
};
