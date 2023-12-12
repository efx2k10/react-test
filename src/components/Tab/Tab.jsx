import { Button } from "../Button/Button";

export const Tab = ({ name, onClick, isActive }) => {

    return (
        <Button onClick={onClick}>
            <span>{isActive ? "*" : ""}{name}</span>
        </Button>
    );
};