import { redirect } from "react-router-dom";

export const getExpireTime = () => {
    const expDate = localStorage.getItem("expiration");
    const expireTime = new Date(expDate);
    const currentTime = new Date();
    const duration = expireTime - currentTime;
    return duration;
}

export const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
}

export const tokenLoader = () => {
    return getToken();
}

export const authLoader = () => {
    const token = getToken();
    if(!token) {
        return redirect('/auth?mode=login');
    }
    const duration = getExpireTime();
    if(duration < 0) {
        return "TOKEN EXPIRED";
    }
    return token;
}