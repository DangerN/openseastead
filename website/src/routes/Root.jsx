import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import {AppBar, Box, Button, Collapse, Toolbar, Typography} from "@mui/material";
import {Outlet, Link as RouterLink, useLocation} from "react-router-dom";
import ErrorPage from "./ErrorPage";
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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const drawerWidth = 240;

const theModuleLinks = {
    'Onboard Computer': 'onboard-computer',
    'Safety': 'safety',
    'Propulsion': 'propulsion',
    'Energy': 'energy',
    'Habitation': 'habitation',
    'End of Life': 'end-of-life',
}

const thePlanLinks = {
    'Construction': 'construction',
    'Launch': 'launch',
    'Sea Trials': 'sea-trials',
    'Location': 'location',
    'Business': 'business',
}

function Root(props) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation()
    const [cBarOpen, setCBarOpen] = useState(true)
    const [planOpen, setPlanOpen] = useState(location.pathname.includes('the-plan') )
    const [moduleOpen, setModuleOpen] = useState(location.pathname.includes('the-module'))

    console.log(location)

    const getPageLinks = (prefix, linkMap) => {
       return Object.entries(linkMap).map(([name, link]) => {
           return <ListItem key={link}>
               <ListItemButton component={RouterLink} to={`/${prefix}/${link}`} selected={location.pathname.includes([prefix, link].join('/'))}>
                   <ListItemText>{`${name}`}</ListItemText>
               </ListItemButton>
           </ListItem>
       })
    }

    const handleCBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setCBarOpen(false);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(()=>{
        setMobileOpen(false)
        setModuleOpen(location.pathname.includes('the-module'))
        setPlanOpen(location.pathname.includes('the-plan'))
    }, [location])

    const drawer = (<>
        <Toolbar />
        <Divider />
        <List>
            <ListItem disablePadding>
                <ListItemButton component={RouterLink} to={'/the-module'}>
                    <ListItemText>The Module</ListItemText>
                </ListItemButton>
            </ListItem>
            <Collapse in={moduleOpen} timeout="auto" unmountOnExit>
                <List component="div" dense disablePadding>
                    {getPageLinks('the-module', theModuleLinks)}
                </List>
            </Collapse>
            <ListItem disablePadding>
                <ListItemButton component={RouterLink} to={'/the-plan'}>
                    <ListItemText>The Plan</ListItemText>
                </ListItemButton>
            </ListItem>
            <Collapse in={planOpen} timeout="auto" unmountOnExit>
                <List component="div" dense disablePadding>
                    {getPageLinks('the-plan', thePlanLinks)}
                </List>
            </Collapse>
            <ListItem disablePadding>
                <ListItemButton component={RouterLink} to={'/about'}>
                    <ListItemText>About</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={RouterLink} to={'/contribute'}>
                    <ListItemText>Contribute</ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        {/*<Divider />*/}
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
                        <Typography variant='h5' sx={{fontFamily: "'Cinzel Decorative', cursive"}}>Open Seastead</Typography>
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
                            <Button component={RouterLink} to={'/contribute'} color={'inherit'} variant={'outlined'} sx={{ flexGrow: 1 }}>
                            <Typography variant='h6' >Contribute</Typography>
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
            {/*{ !isMobile && ['the-module', 'the-plan'].some(path => location.pathname.includes(path)) ?*/}
            { !isMobile && location.pathname !== '/' ?
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
            <Box sx={{height: '100%'}} >
                { props.errorPage ? <ErrorPage /> : <Outlet context={{isMobile: isMobile, mobileOpen: mobileOpen, handleDrawerToggle: handleDrawerToggle, drawerWidth: drawerWidth}}/> }
            </Box>
        </Box>
        <Snackbar open={cBarOpen} onClose={handleCBarClose} autoHideDuration={20000}>
            <MuiAlert onClose={handleCBarClose} severity={'warning'} variant={'filled'}>
                This site is currently under heavy development. Some areas may be incomplete and items will likely be moved, added, or removed.
            </MuiAlert>
        </Snackbar>
    </>
}

export default Root
