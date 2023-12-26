import {RATING} from "../../constants/rating";
import cn from 'classnames';
import styles from "./styles.module.css"

export const Rate = ({rating = 0, max = RATING.max, callBack, size = 's'}) => {
    const arr = Array.from({length: max}, (_, i) => i + 1);
    return (
        <div className={styles.root}>
            {
                arr.map((i) => (
                    <span onClick={() => callBack && callBack(i)}
                          className={cn(
                              styles.star,
                              {[styles.size_l]: size === 'l' ? 1 : 0},
                              {[styles.star_full]: i <= rating},
                              {[styles.editable]: callBack}
                          )}
                          key={i}></span>
                ))
            }
        </div>
    )
};