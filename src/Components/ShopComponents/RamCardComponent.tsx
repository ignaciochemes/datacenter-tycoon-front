import { Button, Card, CardContent, Typography } from "@mui/material";

export default function RamCardComponent(ram: any, key: any) {
    return (
        <Card key={key}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {ram.rams.name}
                </Typography>
                <Typography variant="body2" component="p">
                    Description: {ram.rams.description}
                </Typography>
                <Typography variant="body2" component="p">
                    Capacity: {ram.rams.capacity} MB
                </Typography>
                <Button variant="contained" color="primary">
                    Buy $ {ram.rams.price}
                </Button>
            </CardContent>
        </Card>
    )
}