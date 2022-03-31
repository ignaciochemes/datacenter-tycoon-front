import axios from "axios";

export function JwtWebService(token: string): Promise<any> {
    const url = `${process.env.REACT_APP_BACKEND_URI}/jwt`;
    const response = axios.post(url, { token });
    return response;
}