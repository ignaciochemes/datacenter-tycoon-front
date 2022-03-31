import { Button, ButtonGroup, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NavBar from "../Components/NavbarComponent";
import CpuCardComponent from "../Components/ShopComponents/CpuCardComponent";
import RamCardComponent from "../Components/ShopComponents/RamCardComponent";
import StorageCardComponent from "../Components/ShopComponents/StorageCardComponent";
import { JwtWebService } from "../WebServices/JwtWebService";
import { GetCpusWebService, GetRamsWebService, GetStoragesWebService } from "../WebServices/ShopWebService";

export default function ShopComponent() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [cpus, setCpus] = useState([]);
    const [showCpus, setShowCpus] = useState(false);
    const [rams, setRams] = useState([]);
    const [showRams, setShowRams] = useState(false);
    const [storages, setStorages] = useState([]);
    const [showStorages, setShowStorages] = useState(false);

    const token = localStorage.getItem('token');
    useEffect(() => {
        const fetchDataCpus = async () => {
            const cpusResponse = await GetCpusWebService(token);
            setCpus(cpusResponse.data.result);
            setShowCpus(true);
        };
        checkJwt();
        fetchDataCpus();
    }, []);

    const showCpusHandler = () => {
        if (showCpus) return setShowCpus(false);
        return setShowCpus(!showCpus);
    }

    const showRamsHandler = async () => {
        if (showRams) return setShowRams(false);
        if (!showRams) {
            const ramsResponse = await GetRamsWebService(token);
            setRams(ramsResponse.data.result);
            return setShowRams(true);
        }
        return setShowRams(!showRams);
    }

    const showStoragesHandler = async () => {
        if (showStorages) return setShowStorages(false);
        if (!showStorages) {
            const storagesResponse = await GetStoragesWebService(token);
            setStorages(storagesResponse.data.result);
            return setShowStorages(true);
        }
        return setShowStorages(!showStorages);
    }


    const checkJwt = async () => {
        if (token) {
            const response = await JwtWebService(token);
            if (response.data.result === true) {
                return setLoggedIn(true);
            }
        }
    }


    return (
        <div>
            <NavBar loggedIn={loggedIn} />
            {loggedIn ? (
                <Container maxWidth="md">
                    <Grid>
                        <ButtonGroup
                            variant="contained"
                            aria-label="outlined primary button group"
                            style={{ marginTop: '5%' }}
                        >
                            <Button onClick={() => showCpusHandler()}>Cpu</Button>
                            <Button onClick={() => showRamsHandler()}>Ram</Button>
                            <Button onClick={() => showStoragesHandler()}>Storage</Button>
                            <Button>Racks</Button>
                        </ButtonGroup>
                    </Grid>
                </Container>
            ) : (
                <div>
                    <Typography variant="h5" component="h2">
                        You must be logged in to see the shop
                    </Typography>
                </div>
            )}
            {loggedIn ? (
                <Container maxWidth="md">
                    <Grid container spacing={3}>
                        {cpus.length > 0 && showCpus ? (
                            <Container maxWidth="md">
                                <Typography variant="h5" component="div">
                                    <h3>SHOP / CPU</h3>
                                </Typography>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                                    {cpus.map((cpu: any, key: any) => (
                                        <Grid item xs={1} sm={4} md={4} key={key}>
                                            <CpuCardComponent cpus={cpu} key={key} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                        ) : (
                            <div>
                            </div>
                        )}
                        {rams.length > 1 && showRams ? (
                            <Container maxWidth="md">
                                <Typography variant="h5" component="div">
                                    <h3>SHOP / RAM</h3>
                                </Typography>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                                    {rams.map((ram: any, key: any) => (
                                        <Grid item xs={1} sm={4} md={4} key={key}>
                                            <RamCardComponent rams={ram} key={key} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                        ) : (
                            <div>
                            </div>
                        )}
                        {storages.length > 1 && showStorages ? (
                            <Container maxWidth="md">
                                <Typography variant="h5" component="div">
                                    <h3>SHOP / STORAGE</h3>
                                </Typography>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                                    {storages.map((storage: any, key: any) => (
                                        <Grid item xs={1} sm={4} md={4} key={key}>
                                            <StorageCardComponent storages={storage} key={key} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                        ) : (
                            <div>
                            </div>
                        )}
                        {!showCpus && !showRams && !showStorages ? (
                            <div>
                                <Container maxWidth="md">
                                    <Typography variant="h5" component="div">
                                        <h3>SHOP</h3>
                                    </Typography>
                                </Container>
                            </div>
                        ) : (
                            <div>
                            </div>
                        )}
                    </Grid>
                </Container>
            ) : (
                <div>
                </div>
            )}
        </div>
    )
}