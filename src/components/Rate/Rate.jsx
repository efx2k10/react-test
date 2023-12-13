import cn from 'classnames';
import styles from "./styles.module.css"
export const Rate = ({rating = 0, max = 5}) => {
    const arr = Array.from({length: max}, (_, i) => i + 1);
    return (
        <div className={styles.root}>
            {
                arr.map((i) => (
                    <span className={cn(styles.star, {[styles.star_full]: i<= rating })} key={i}></span>
                ))
            }
        </div>
    )
};