import { useEffect } from "react";
import { myAxios } from "./helper";

export const signUp = async (user) => {
    try {
        const response = await myAxios.post('/users/register', user).then((response) => response.data)
        console.log("Registration Successful");
        return response;
    } catch (error) {
        console.log("Registration failed, Please try again.");
    }
}

export const getUser = async (number, user) => {
    const num = parseInt(number)
    try {
        const response = await myAxios.get(`/users/getData/${num}`, user).then((response) => response.data)
        console.log("successful login")
        return response;
    } catch (error) {
        console.log("server error");
    }
}


export const getCards = async () => {
    const response = await myAxios.get('/').then((response) => response.data)
    console.log(response);
    return response;
}

export const rsTable = async (data) =>{
try {
    const response = await myAxios.post('/table',data).then((response) => response.data);
    return response;
} catch (error) {
    return "faild data"
}
}

export const getBooking = async () => {
    const response = await myAxios.get('/booking').then((response) => response.data)
    console.log(response);
    return response;
}
