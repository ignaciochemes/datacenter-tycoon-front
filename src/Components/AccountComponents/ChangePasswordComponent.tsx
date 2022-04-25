import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import ChangePasswordBodyRequest from "../../Models/Request/AccountComponent/ChangePasswordBodyRequest";
import { ChangePasswordWebService } from "../../WebServices/AccountWebService";

export default function ChangePasswordComponent() {
    const [viewForm, setViewForm] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const sendToBackend = async () => {
        const body = new ChangePasswordBodyRequest(oldPassword, newPassword);
        await ChangePasswordWebService(body, localStorage.getItem('token'));
    }

    return (
        <div>
            {viewForm ?
                <Grid container spacing={3}>
                    <Grid item xs={10} sm={6}>
                        <Typography variant="h4">Change password</Typography>
                        <Typography variant="body2" component="div">
                            Old password:
                        </Typography>
                        <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                        <Typography variant="body2" component="div">
                            New password:
                        </Typography>
                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        <Button variant="contained" color="primary" onClick={() => setViewForm(false)}>
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => { sendToBackend(); setViewForm(false) }}
                        >
                            Change
                        </Button>
                    </Grid>
                </Grid>
                :
                <Grid container spacing={3}>
                    <Grid item xs={10} sm={6}>
                        <Typography variant="h4">Change password</Typography>
                        <Button variant="contained" color="primary" onClick={() => setViewForm(true)}>
                            Change password
                        </Button>
                    </Grid>
                </Grid>
            }
        </div>
    )
}