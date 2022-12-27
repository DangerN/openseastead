import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {Outlet, Link as RouterLink, useLocation} from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useEffect, useState} from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

const theModuleLinks = {
    'Overview': '',
    'Safety': 'safety'
}

function Root(props) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(()=>{
        setMobileOpen(false)
    }, [location])

    const drawer = (<>
        <Toolbar />
        <Divider />
        {isMobile ? <List>
            <ListItem disablePadding>
                <ListItemButton component={RouterLink} to={'/the-module'}>
                    <ListItemText>The Module</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={RouterLink} to={'/the-plan'}>
                    <ListItemText>The Plan</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={RouterLink} to={'/about'}>
                    <ListItemText>About</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={RouterLink} to={'/donate'}>
                    <ListItemText>Donate</ListItemText>
                </ListItemButton>
            </ListItem>
        </List> : null}
        <Divider />
        <List>
            { location.pathname.includes('the-module') ? Object.entries(theModuleLinks).map(([name, link]) => {
                return <ListItem disablePadding key={link}>
                    <ListItemButton component={RouterLink} to={`/the-module/${link}`}>
                        <ListItemText>{`${name}`}</ListItemText>
                    </ListItemButton>
                </ListItem>
            }) : null }
        </List>
    </>)

    return <>
        <CssBaseline />
        <Box sx={{ flexGrow: 1, height: '100vh' }}>
            <AppBar position='fixed' sx={ isMobile ? null : { zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        className={'what'}
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button component={RouterLink} to={'/'} color={'inherit'} >
                        <Typography variant='h5' >Open Seastead</Typography>
                    </Button>

                    { isMobile ? null :
                        <>
                            <Typography sx={{ flexGrow: 3}}></Typography>
                            <Button component={RouterLink} to={'/the-module'} color={'inherit'} sx={{ flexGrow: 1 }}>
                                <Typography variant='h6' >The Module</Typography>
                            </Button>
                            <Button component={RouterLink} to={'/the-plan'} color={'inherit'} sx={{ flexGrow: 1 }}>
                            <Typography variant='h6' >The Plan</Typography>
                            </Button>
                            <Button component={RouterLink} to={'/about'} color={'inherit'} sx={{ flexGrow: 1 }}>
                            <Typography variant='h6' >About</Typography>
                            </Button>
                            <Button component={RouterLink} to={'/donate'} color={'inherit'} variant={'outlined'} sx={{ flexGrow: 1 }}>
                            <Typography variant='h6' >Donate</Typography>
                            </Button>
                        </>
                    }
                </Toolbar>
            </AppBar>
            {
                isMobile ? <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer> : null
            }
            { !isMobile && ['the-module', 'the-plan'].some(path => location.pathname.includes(path)) ?
                <Drawer
                    variant="permanent"
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
                : null }
            <Box >
                <Toolbar/>
                { props.errorPage ? <ErrorPage/> : <Outlet context={{isMobile: isMobile, mobileOpen: mobileOpen, handleDrawerToggle: handleDrawerToggle, drawerWidth: drawerWidth}}/> }
            </Box>
        </Box>
    </>
}

export default Root
