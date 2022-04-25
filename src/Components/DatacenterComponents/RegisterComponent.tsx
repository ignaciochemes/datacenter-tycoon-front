import { Button, Container, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import RegisterDatacenterBodyRequest from "../../Models/Request/DatacenterComponent/RegisterDatacenterBodyRequest";
import { CreateDataCenterWebService } from "../../WebServices/DatacenterWebService";

export function RegisterComponent() {

    const [datacenterName, setDatacenterName] = useState('');
    const [datacenterDescription, setDatacenterDescription] = useState('');

    const sendToBackend = async () => {
        const body = new RegisterDatacenterBodyRequest(datacenterName, datacenterDescription, 1);
        const response2 = await CreateDataCenterWebService(body, localStorage.getItem('token'));
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
                        label="Datacenter Name"
                        variant="outlined"
                        type={'text'}
                        onChange={(e) => setDatacenterName(e.target.value)}
                    />
                </Grid>
                <Grid item md={12}>
                    <TextField
                        id="form-description"
                        label="Datacenter Description"
                        variant="outlined"
                        type={'text'}
                        onChange={(e) => setDatacenterDescription(e.target.value)}
                    />
                </Grid>
                <Grid item md={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => { sendToBackend() }}
                    >
                        Open Datacenter
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}