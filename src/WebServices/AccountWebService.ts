import axios from "axios";
import ChangePasswordBodyRequest from "../Models/Request/AccountComponent/ChangePasswordBodyRequest";

export function ChangePasswordWebService(body: ChangePasswordBodyRequest, token: any): Promise<any> {
    const url = `${process.env.REACT_APP_BACKEND_URI}/user`;
    const response = axios.put(url, body, { headers: { 'access-token': `bearer ${token}` } })
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    return response;
}