import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DatacenterComponent from "../Components/DashboardComponents/DatacenterComponent";
import RackComponent from "../Components/DashboardComponents/RackComponent";
import UserStaticsComponent from "../Components/DashboardComponents/UserStaticsComponent";
import NavBar from "../Components/NavbarComponent";
import ResponsiveDrawer from "../Components/NavbarComponent2";
import { LoginBodyRequest } from "../Models/Request/LoginComponent/LoginBodyRequest";
import { JwtWebService } from "../WebServices/JwtWebService";
import { LoginWebService } from "../WebServices/LoginWebService";

export default function DashBoardComponent() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const token = localStorage.getItem('token');

    useEffect(() => {
        const checkJwt = async () => {
            if (token) {
                const response = await JwtWebService(token);
                if (response.data.result === true) {
                    setLoggedIn(true);
                }
            }
        }
        checkJwt();
    })

    const sendToBackend = async () => {
        const body = new LoginBodyRequest(email, password, 1);
        const response = await LoginWebService(body);
        if (response) {
            setLoggedIn(true);
            localStorage.setItem('token', response.data.result.accessToken);
            return toast.success('Successfully logged in');
        }
        return toast.error('Email or password is incorrect');
    }


    return (
        <div>
            {/* <NavBar loggedIn={loggedIn} /> */}
            {loggedIn ? (
                <div>
                    <ResponsiveDrawer />
                    <Container maxWidth="md">
                        <Grid container
                            spacing={1}
                            direction="column"
                            justifyContent={"center"}
                            alignItems={'center'}
                            style={{ marginTop: '5%' }}
                        >
                            <UserStaticsComponent />
                        </Grid>
                        <Grid container
                            spacing={1}
                            direction="column"
                            justifyContent={"center"}
                            alignItems={'center'}
                            style={{ marginTop: '5%' }}
                        >
                            <DatacenterComponent />
                        </Grid>
                        <Grid container
                            spacing={1}
                            direction="column"
                            justifyContent={"center"}
                            alignItems={'center'}
                            style={{ marginTop: '5%' }}
                        >
                            <RackComponent />
                        </Grid>
                    </Container>
                </div>
            ) : (
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
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            )}
        </div>
    );
}