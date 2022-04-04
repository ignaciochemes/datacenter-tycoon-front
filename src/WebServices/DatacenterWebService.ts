import axios from "axios";
import { toast } from "react-toastify";
import RegisterDatacenterBodyRequest from "../Models/Request/DatacenterComponent/RegisterDatacenterBodyRequest";

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

export function CreateDataCenterWebService(body: RegisterDatacenterBodyRequest, token: any) {
    const url = `${process.env.REACT_APP_BACKEND_URI}/datacenter`;
    const response = axios.post(url, body, {
        headers: {
            'Content-Type': 'application/json',
            'access-token': `bearer ${token}`
        }
    }).then((response) => {
        toast.success("Datacenter created successfully");
        return response;
    }).catch((error) => {
        if (error.response.data.statusCode === 40002) {
            toast.error('Datacenter already exists');
        }
        if (error.response.data.statusCode === 20002) {
            toast.error('First you need to create a company');
        }
        if (error.response.data.statusCode === 40001) {
            toast.error('You already have a datacenter');
        }
        return error;
    });
    return response;
}