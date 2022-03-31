import { Button, Card, CardContent, Typography } from "@mui/material";

export default function StorageCardComponent(storage: any, key: any) {
    return (
        <Card key={key}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {storage.storages.name}
                </Typography>
                <Typography variant="body2" component="p">
                    Description: {storage.storages.description}
                </Typography>
                <Typography variant="body2" component="p">
                    Capacity: {storage.storages.capacity} MB
                </Typography>
                <Button variant="contained" color="primary">
                    Buy $ {storage.storages.price}
                </Button>
            </CardContent>
        </Card>
    )
}