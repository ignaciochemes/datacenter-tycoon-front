import axios from "axios";

export async function UserStaticsWebService(token: any): Promise<any> {
    const url = `${process.env.REACT_APP_BACKEND_URI}/user`;
    const response = axios.get(url, { headers: { 'access-token': `bearer ${token}` } });
    return response;
}