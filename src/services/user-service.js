import { myAxios } from "./helper";

export const signUp = (user) => {
    return myAxios.post('/users/register', user).then((response) => response.data)
}

export const getUser = (number,user) => {
    const num = parseInt(number)
    return myAxios.get(`/users/getData/${num}`,user).then((response) => response.data)
}