import axios from "axios";
import { LoginBodyRequest } from "../Models/Request/LoginComponent/LoginBodyRequest";

export function LoginWebService(user: LoginBodyRequest): Promise<any> {
    const url = `${process.env.REACT_APP_BACKEND_URI}/user/login`;
    const response = axios.post(url, user);
    return response;
}