import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { CompanyStaticsWebService } from "../../WebServices/CompanyStaticsWebService";
import { UserStaticsWebService } from "../../WebServices/UserStaticsWebService";

export default function UserStaticsComponent() {
    const [userStatics, setUserStatics] = useState([]);
    const [companyStatics, setCompanyStatics] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        let userArray: any = [];
        let companyArray: any = [];
        async function fetchData() {
            const userResponse = await UserStaticsWebService(token);
            const companyResponse = await CompanyStaticsWebService(token, userResponse.data.result.uuid);
            console.log(companyResponse)
            if (companyResponse.data.result) {
                companyArray.push(companyResponse.data.result);
            } else {
                companyArray.push([]);
            }
            userArray.push(userResponse.data.result);
            setUserStatics(userArray);
            setCompanyStatics(companyArray);
        }
        fetchData();
    }, [setUserStatics, setCompanyStatics]);

    return (
        <div>
            {userStatics.length > 0 ? (
                <div>
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
                        {companyStatics.map((companyStatics: any) => (
                            <Grid item xs={12} sm={6}>
                                {companyStatics.name ? (
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
                                ) : (
                                    <div>
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
                                    </div>
                                )}
                            </Grid>
                        ))}
                    </Grid>
                </div>
            ) : (
                <div>
                    <Typography variant="h3" component="div">
                        No data available
                    </Typography>
                </div>
            )}
        </div>
    );

}