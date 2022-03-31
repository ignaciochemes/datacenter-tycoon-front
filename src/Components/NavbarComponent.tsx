import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import RegisterComponent from '../MainComponents/RegisterComponent';
import { NAVBAR_PAGES } from '../Constants/NavbarPagesConstants';

type loggedInState = {
    loggedIn: boolean;
}

const pages = NAVBAR_PAGES.map((page: any) => {
    return (
        <Button
            key={page.name}
            sx={{ my: 1, color: 'white', display: 'block' }}
            href={page.path}
        >
            {page.name}
        </Button>
    )
})

export default function NavBar(loggedIn: loggedInState) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Datacenter Tycoon
                    </Typography>
                    {loggedIn.loggedIn ? (
                        pages
                    ) : (
                        <Button
                            variant="contained"
                            style={{
                                marginRight: '1rem',
                                backgroundColor: '#00bcd4',
                            }}
                            onClick={() => {
                                <RegisterComponent />;
                            }}
                        >
                            Login
                        </Button>
                    )}
                    {loggedIn.loggedIn ? (
                        <div></div>
                    ) : (
                        <Button
                            variant="contained"
                            href='/signup'
                            style={{
                                backgroundColor: '#00bcd4',
                            }}
                        >
                            Signup
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}