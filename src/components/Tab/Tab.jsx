import { Button } from "../Button/Button";
import cn from 'classnames';
import styles from "./styles.module.css"

export const Tab = ({ name, onClick, isActive }) => {

    return (
        <Button className={cn(styles.root, {[styles.active]: isActive })} onClick={onClick} >
            <span>{name}</span>
        </Button>
    );
};