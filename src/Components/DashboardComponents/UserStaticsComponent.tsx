import { Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { CompanyStaticsWebService } from "../../WebServices/CompanyWebService";
import { UserStaticsWebService } from "../../WebServices/UserStaticsWebService";

export default function UserStaticsComponent() {
    const [userStatics, setUserStatics] = useState([] as any);
    const [companyStatics, setCompanyStatics] = useState([] as any);

    useEffect(() => {
        const token = localStorage.getItem('token');
        let userArray: any = [];
        let companyArray: any = [];
        async function fetchData() {
            const userResponse = await UserStaticsWebService(token);
            if (userResponse.data.result) {
                userArray.push(userResponse.data.result);
                setUserStatics(userArray);
            }
            const companyResponse = await CompanyStaticsWebService(token, userResponse.data.result.uuid);
            if (companyResponse.data.result) {
                companyArray.push(companyResponse.data.result)
                setCompanyStatics(companyArray);
            }
        }
        fetchData();
    }, [setUserStatics, setCompanyStatics]);

    return (
        <div>
            <Typography variant="body2" component="div">
                <h1>User Information</h1>
            </Typography>
            {userStatics[0]?.uuid ? (
                <Grid container spacing={3}>
                    {userStatics.map((userStatics: any) => (
                        <Grid item xs={12} sm={6}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        User information
                                    </Typography>
                                    <Typography variant="body2" component="div">
                                        Email: {userStatics.email}
                                    </Typography>
                                    <Typography variant="body2" component="div">
                                        Uuid: {userStatics.uuid}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                    {!companyStatics[0]?.owner ? (
                        <Grid item xs={12} sm={6}>
                            <Card sx={{ minWidth: 275, minHeight: 126 }}>
                                <CardContent>
                                    <Box
                                        alignContent={'center'}
                                        justifyContent={'center'}
                                        display={'flex'}
                                        flexDirection={'column'}
                                        marginTop={'10%'}
                                    >
                                        <Button variant="contained" href="/register-company">
                                            Create Company
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ) : (
                        <Grid item xs={12} sm={6}>
                            {companyStatics.map((companyStatics: any) => (
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Company information
                                        </Typography>
                                        <Typography variant="body2" component="div">
                                            Name: {companyStatics.name}
                                        </Typography>
                                        <Typography variant="body2" component="div">
                                            Description: {companyStatics.description}
                                        </Typography>
                                        <Typography variant="body2" component="div">
                                            Balance: $1,500
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Grid>
                    )}
                </Grid>
            ) : (
                <Typography variant="body2" component="div">
                    No data
                </Typography>
            )}
        </div>
    );

}