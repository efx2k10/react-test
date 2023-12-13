import {useReducer} from "react";
import {Rate} from "../Rate/Rate";
import {RATING} from "../../constants/rating";
import styles from "./styles.module.css"


const FORM_DEFAULT_STATE = {
    user: '',
    text: '',
    rating: RATING.max
}

const FORM_ACTION = {
    setUser: 'setUser',
    setText: 'setText',
    setRating: 'setRating',
    clearFrom: 'clearForm'
}
const reducer = (state, action) => {

    switch (action.type) {
        case FORM_ACTION.setUser:
            return {...state, user: action.payload}

        case FORM_ACTION.setText:
            return {...state, text: action.payload}

        case FORM_ACTION.setRating:
            return {...state, rating: action.payload}

        case FORM_ACTION.clearFrom:
            return {...FORM_DEFAULT_STATE}

        default:
            return state
    }
}

export const ReviewForm = () => {

    const [formValue, dispatch] = useReducer(reducer, FORM_DEFAULT_STATE)

    return (
        <div className={styles.root}>
            <div className={styles.row}>
                <label>user</label>
                <input className={styles.formControl} type="text" value={formValue.user}
                       onChange={(event) =>
                           dispatch({
                               type: FORM_ACTION.setUser,
                               payload: event.target.value
                           })
                       }
                />
            </div>

            <div className={styles.row}>
                <label>text</label>
                <input className={styles.formControl} type="text" value={formValue.text}
                       onChange={(event) =>
                           dispatch({
                               type: FORM_ACTION.setText,
                               payload: event.target.value
                           })
                       }
                />
            </div>

            <div className={styles.row}>
                <Rate rating={formValue.rating} readonly={false} callBack={(rating) => dispatch({
                    type: FORM_ACTION.setRating,
                    payload: rating
                })}/>
            </div>

            <div className={styles.row}>
                <button onClick={() => dispatch({type: FORM_ACTION.clearFrom})}>clear</button>
            </div>
        </div>
    )
}