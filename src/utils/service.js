import {USER_EMAIL, USER_NAME} from "../views/login-page/LoginPage";

export const checkLoginStatus = (navigate) => {
    if (!!localStorage.getItem(USER_NAME) && !!localStorage.getItem(USER_EMAIL)) {
        navigate('/');
    } else {
        navigate('/login');
    }
}