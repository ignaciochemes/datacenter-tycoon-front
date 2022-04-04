import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { DatacenterWebService } from "../../WebServices/DatacenterWebService";

export default function DatacenterComponent() {
    const [datacenter, setDatacenter] = useState({} as any);
    const [hasDatacenter, setHasDatacenter] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        async function fetchData() {
            const response = await DatacenterWebService(token);
            if (!response.data.result) {
                setHasDatacenter(false);
            } else {
                setDatacenter(response.data.result);
                setHasDatacenter(true);
            }
        }
        fetchData();
    }, [setDatacenter, setHasDatacenter]);

    return (
        <div>
            <Typography variant="h4">Datacenter information</Typography>
            {hasDatacenter ? (
                <Grid container spacing={3}>
                    <Grid item xs={10} sm={6}>
                        <Typography variant="body2" component="div">
                            Name: {datacenter.name}
                        </Typography>
                        <Typography variant="body2" component="div">
                            Description: {datacenter.description}
                        </Typography>
                        <Typography variant="body2" component="div">
                            Type: {datacenter.datacenterType}
                        </Typography>
                        <Typography variant="body2" component="div">
                            Ubication: {datacenter.datacenterUbication}
                        </Typography>
                        <Typography variant="body2" component="div">
                            Temperature: 20°C
                        </Typography>
                    </Grid>
                    <Grid item xs={10} sm={6}>
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
                    <Grid item xs={10} sm={6}>
                        <Typography variant="body2" component="div">
                            Max Power: {datacenter.datacenterMaxPower}w
                        </Typography>
                        <Typography variant="body2" component="div">
                            Max Bandwidth: {datacenter.datacenterMaxBandwidth} Mbps
                        </Typography>
                        <Typography variant="body2" component="div">
                            Max Racks: {datacenter.datacenterMaxRacks} U
                        </Typography>
                    </Grid>
                </Grid>
            ) : (
                <Box
                    alignContent={'center'}
                    justifyContent={'center'}
                    display={'flex'}
                    flexDirection={'column'}
                    marginTop={'10%'}
                >
                    <Button variant="contained" href="/register-datacenter">
                        Open Datacenter
                    </Button>
                </Box>
            )}
        </div>
    )
}