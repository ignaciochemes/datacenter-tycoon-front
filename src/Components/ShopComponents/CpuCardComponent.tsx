import { Button, Card, CardContent, Typography } from "@mui/material";

export default function CpuCardComponent(cpu: any, key: any) {
    const mhzToGhz = (mhz: any) => {
        return mhz / 1000;
    };

    return (
        <Card key={key}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {cpu.cpus.name}
                </Typography>
                <Typography variant="body2" component="p">
                    Description: {cpu.cpus.description}
                </Typography>
                <Typography variant="body2" component="p">
                    Cores / Threads: C{cpu.cpus.cores} / T{cpu.cpus.threads}
                </Typography>
                <Typography variant="body2" component="p">
                    Frecuency: {mhzToGhz(cpu.cpus.mhz)} GHz
                </Typography>
                <Button variant="contained" color="primary">
                    Buy $ {cpu.cpus.price}
                </Button>
            </CardContent>
        </Card>
    )
}