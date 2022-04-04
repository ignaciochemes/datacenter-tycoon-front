import axios from "axios";

export function DatacenterWebService(token: any) {
    const url = `${process.env.REACT_APP_BACKEND_URI}/datacenter`;
    const response = axios.get(url, { headers: { 'access-token': `bearer ${token}` } })
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    return response;
}