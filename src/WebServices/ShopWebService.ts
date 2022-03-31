import axios from "axios";

export async function GetCpusWebService(token: any) {
    const url = `${process.env.REACT_APP_BACKEND_URI}/servers/cpus`;
    const response = axios.get(url, { headers: { 'access-token': `bearer ${token}` } });
    return response;
}

export async function GetRamsWebService(token: any) {
    const url = `${process.env.REACT_APP_BACKEND_URI}/servers/rams`;
    const response = axios.get(url, { headers: { 'access-token': `bearer ${token}` } });
    return response;
}

export async function GetStoragesWebService(token: any) {
    const url = `${process.env.REACT_APP_BACKEND_URI}/servers/storages`;
    const response = axios.get(url, { headers: { 'access-token': `bearer ${token}` } });
    return response;
}