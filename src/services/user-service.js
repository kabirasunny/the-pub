import { myAxios } from "./helper";

export const signUp = (user) => {
    return myAxios.post('/users/register', user).then((response) => response.data)
}