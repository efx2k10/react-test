import {useSelector} from "react-redux";
import {selectUserById} from "../../store/user/selectors";

export const UserIcon = ({userId}) => {

    const user = useSelector(state => selectUserById(state, {userId}))

    if (!user) return null;

    return (
        <div>{user.name}</div>
    )

}