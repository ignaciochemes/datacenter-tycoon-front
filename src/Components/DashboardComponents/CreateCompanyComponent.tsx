import { Button, Container, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import RegisterCompanyBodyRequest from "../../Models/Request/RegisterCompanyComponent/RegisterCompanyBodyRequest";

export function CreateCompanyComponent() {
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');

    const sendToBackend = async () => {
        const body = new RegisterCompanyBodyRequest(companyName, companyDescription);
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URI}/company`, body, {
            headers: {
                'Content-Type': 'application/json',
                'access-token': `bearer ${localStorage.getItem('token')}`
            }
        }).then(() => {
            return toast.success('Successfully registered');
        }).catch((e) => {
            return toast.error(e.response.data.message);
        });
        return response;
    }

    return (
        <Container maxWidth="md">
            <Grid container
                spacing={1}
                direction="column"
                justifyContent={"center"}
                alignItems={'center'}
                style={{ marginTop: '5%' }}
            >
                <Grid item md={12}>
                    <TextField
                        id="form-name"
                        label="Company Name"
                        variant="outlined"
                        type={'text'}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </Grid>
                <Grid item md={12}>
                    <TextField
                        id="form-description"
                        label="Company Description"
                        variant="outlined"
                        type={'text'}
                        onChange={(e) => setCompanyDescription(e.target.value)}
                    />
                </Grid>
                <Grid item md={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => { sendToBackend() }}
                    >
                        Register Company
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}