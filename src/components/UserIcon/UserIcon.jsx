import {useDispatch, useSelector} from "react-redux";
import {selectIsUSerLoading, selectUserById} from "../../store/user/selectors";
import {useEffect} from "react";
import {fetchUsers} from "../../store/user";

export const UserIcon = ({userId}) => {
    const isLoading = useSelector(selectIsUSerLoading)
    const dispatch = useDispatch();
    const user = useSelector((state) =>
        selectUserById(state, { userId })
    );

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


    if (isLoading) return (<></>)


    if (!user) return null;

    return (
        <div>{user.name}</div>
    )

}