import {Button} from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";

export const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>404</h1>
            <div>
                <Button onClick={() => navigate('/', {replace: true})}>
                    На главную страницу
                </Button>
            </div>
        </div>
    );
};