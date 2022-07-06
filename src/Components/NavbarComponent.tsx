import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
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
                    <Button
                        variant="contained"
                        href='/'
                        style={{
                            marginRight: '1rem',
                            backgroundColor: '#00bcd4',
                        }}
                    >
                        Login
                    </Button>
                    <Button
                        variant="contained"
                        href='/signup'
                        style={{
                            backgroundColor: '#00bcd4',
                        }}
                    >
                        Signup
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}