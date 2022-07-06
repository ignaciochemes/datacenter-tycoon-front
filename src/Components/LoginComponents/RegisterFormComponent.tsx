import { Button, Container, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { RegisterBodyRequest } from '../../Models/Request/LoginComponent/RegisterBodyRequest';
import NavBar from "../NavbarComponent";

export default function RegisterFormComponent() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendToBackend = async () => {
        const body = new RegisterBodyRequest(email, password, 2);
        const response = await axios.post('http://localhost:30000/ms-dtct-api/user', body)
            .then(() => {
                toast.success('Successfully registered');
            }).catch((e) => {
                if (e.response.data.statusCode === 400) {
                    return toast.error('Invalid rol', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                return toast.error('Email is already taken', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            });
        return response;
    }

    return (
        <div>
            <NavBar />
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
                            id="form-email"
                            label="Email"
                            variant="outlined"
                            type={'email'}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            id="form-password"
                            label="Password"
                            variant="outlined"
                            type={'password'}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Button variant="contained" color="primary" onClick={() => { sendToBackend() }}>
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}