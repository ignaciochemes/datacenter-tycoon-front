import { Grid, Typography } from "@mui/material";

export default function DatacenterComponent() {

    return (
        <div>
            <Typography variant="body2" component="div">
                <h1>Datacenter Information</h1>
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body2" component="div">
                        Type: Garbage
                    </Typography>
                    <Typography variant="body2" component="div">
                        Ubication: Home (Canada)
                    </Typography>
                    <Typography variant="body2" component="div">
                        Temperature: 20°C
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body2" component="div">
                        Max Power: 7500w
                    </Typography>
                    <Typography variant="body2" component="div">
                        Power Usage: 386w
                    </Typography>
                    <Typography variant="body2" component="div">
                        Power Used: 12.900 kWh
                    </Typography>
                    <Typography variant="body2" component="div">
                        Internet Speed: 1.5 Mbps
                    </Typography>
                    <Typography variant="body2" component="div">
                        Internet Usage: 0.000 kB
                    </Typography>
                    <Typography variant="body2" component="div">
                        Internet Used: 0.000 kB
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}