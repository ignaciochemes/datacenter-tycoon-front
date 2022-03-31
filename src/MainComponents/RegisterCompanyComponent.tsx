import { Button, Container, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import NavBar from "../Components/NavbarComponent";
import RegisterBodyRequest from "../Models/Request/DashboardComponent/RegisterBodyRequest";

export function RegisterCompanyComponent(loggedIn: any) {
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');

    const sendToBackend = async () => {
        const body = new RegisterBodyRequest(companyName, companyDescription);
        const response = await axios.post('http://localhost:30000/ms-dtct-api/company', body, {
            headers: {
                'Content-Type': 'application/json',
                'access-token': `bearer ${localStorage.getItem('token')}`
            }
        }).then(() => {
            return toast.success('Successfully registered');
        }).catch((e) => {
            console.log(e)
        });
        return response;
    }

    return (
        <div>
            <NavBar loggedIn={loggedIn} />
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
                        <Button variant="contained" color="primary" onClick={() => { sendToBackend() }}>
                            Register Company
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}