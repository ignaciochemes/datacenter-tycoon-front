import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function RackComponent() {
    const racksInfo = [
        {
            name: "Rack 1",
            description: "Rack 1 description",
            servers: 10,
            powerUsage: "300 w",
            wanUsage: "300 Kbps",
            powerUsed: "1200 kWh",
            internetUsed: "19 GB",
        },
        {
            name: "Rack 2",
            description: "Rack 2 description",
            servers: 5,
            powerUsage: "100 w",
            wanUsage: "1.41 Mbps",
            powerUsed: "2401 kWh",
            internetUsed: "510 GB",
        },
        {
            name: "Rack 2",
            description: "Rack 2 description",
            servers: 5,
            powerUsage: "100 w",
            wanUsage: "1.41 Mbps",
            powerUsed: "2401 kWh",
            internetUsed: "510 GB",
        },
    ]
    return (
        <div>
            <Typography variant="body2" component="div">
                <h1>Racks Information</h1>
            </Typography>
            <Grid container spacing={3}>
                {racksInfo.map((racks: any) => (
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="body2" component="div">
                                    Rack Name: {racks.name}
                                </Typography>
                                <Typography variant="body2" component="div">
                                    Servers Count: {racks.servers}
                                </Typography>
                                <Typography variant="body2" component="div">
                                    Power Usage: {racks.powerUsage}
                                </Typography>
                                <Typography variant="body2" component="div">
                                    WAN Usage: {racks.wanUsage}
                                </Typography>
                                <Typography variant="body2" component="div">
                                    Power Used: {racks.powerUsed}
                                </Typography>
                                <Typography variant="body2" component="div">
                                    Internet Used: {racks.internetUsed}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}