import axios from "axios";

export function CompanyStaticsWebService(token: any, uuid: string): Promise<any> {
    const url = `${process.env.REACT_APP_BACKEND_URI}/company/${uuid}`;
    const response = axios.get(url, { headers: { 'access-token': `bearer ${token}` } })
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    return response;
}