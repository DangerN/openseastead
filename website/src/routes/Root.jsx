import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import {AppBar, Box, Button, Collapse, Paper, Toolbar, Typography} from "@mui/material";
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
import PreviousNextButtons from "../components/PreviousNextButtons";
import Logo from "../assests/images/logo512.png";

const drawerWidth = 240;

const theModuleLinks = {
    'Design': 'design',
    'Safety': 'safety',
    'Onboard Computer': 'onboard-computer',
    'Propulsion': 'propulsion',
    'Energy': 'energy',
    'Habitation': 'habitation',
    'Materials': 'materials',
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

    const getPreviousNextButtons = () => {
        let previousPath, previousName, nextPath, nextName

        if (location.pathname.includes('the-module')) {
            const moduleLinksEntries = Object.entries(theModuleLinks)

            if (location.pathname === '/the-module') {
                previousPath = '/'
                previousName = 'Home'
                nextPath = moduleLinksEntries[0][1]
                nextName = moduleLinksEntries[0][0]
            } else {

                const currentIndex = moduleLinksEntries.findIndex(([linkName, linkPath])=>location.pathname.includes(linkPath))

                let next, previous

                switch (currentIndex) {
                    case 0:
                        next = moduleLinksEntries[currentIndex + 1]
                        previousPath = '/the-module'
                        previousName = 'The Module'
                        nextPath = next[1]
                        nextName = next[0]
                        break
                    case moduleLinksEntries.length - 1:
                        previous = moduleLinksEntries[currentIndex - 1]
                        next = moduleLinksEntries[currentIndex + 1]
                        previousPath = previous[1]
                        previousName = previous[0]
                        nextPath = '/the-plan'
                        nextName = 'Plan'
                        break
                    default:
                        previous = moduleLinksEntries[currentIndex - 1]
                        next = moduleLinksEntries[currentIndex + 1]
                        previousPath = previous[1]
                        previousName = previous[0]
                        nextPath = next[1]
                        nextName = next[0]
                        break
                }
            }
        }

        if (location.pathname === '/the-plan') {
            previousPath = '/the-module'
            previousName = 'The Module'
            nextPath = '/contribute'
            nextName = 'Contribute'
        }

        if (location.pathname.includes('the-plan')) {
            const planLinkEntries = Object.entries(thePlanLinks)

            if (location.pathname === '/the-plan') {
                const moduleLinksEntries = Object.entries(theModuleLinks)
                previousPath = `/the-module/${moduleLinksEntries[moduleLinksEntries.length-1][1]}`
                previousName = `${moduleLinksEntries[moduleLinksEntries.length-1][0]}`
                nextPath = planLinkEntries[0][1]
                nextName = planLinkEntries[0][0]
            } else {

                const currentIndex = planLinkEntries.findIndex(([linkName, linkPath])=>location.pathname.includes(linkPath))

                let next, previous

                switch (currentIndex) {
                    case 0:
                        next = planLinkEntries[currentIndex + 1]
                        previousPath = '/the-plan'
                        previousName = 'The Plan'
                        nextPath = next[1]
                        nextName = next[0]
                        break
                    case planLinkEntries.length - 1:
                        previous = planLinkEntries[currentIndex - 1]
                        next = planLinkEntries[currentIndex + 1]
                        previousPath = previous[1]
                        previousName = previous[0]
                        nextPath = '/contribute'
                        nextName = 'Contribute'
                        break
                    default:
                        previous = planLinkEntries[currentIndex - 1]
                        next = planLinkEntries[currentIndex + 1]
                        previousPath = previous[1]
                        previousName = previous[0]
                        nextPath = next[1]
                        nextName = next[0]
                        break
                }
            }
        }

        return <PreviousNextButtons
            previousPath={previousPath}
            previousName={previousName}
            nextPath={nextPath}
            nextName={nextName}
        />
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
        window.scrollTo(0, 0)
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
                        <img src={Logo} width={'40px'} alt={'Logo'} style={{marginRight: '.5rem'}}/>
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
                            <Button component={RouterLink} to={'/contribute'} color={'secondary'} variant={'contained'} sx={{ flexGrow: 1 }}>
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
                {
                    props.errorPage ? <ErrorPage /> :
                        <Outlet context={{
                            isMobile: isMobile,
                            mobileOpen: mobileOpen,
                            handleDrawerToggle: handleDrawerToggle,
                            drawerWidth: drawerWidth,
                            previousNextButtons: getPreviousNextButtons()
                        }}/> }

                <Paper component={'footer'} square variant='outlined' >
                    <Typography textAlign={'center'} variant={'body2'} sx={{margin: '1rem 0'}}>
                        © 2023 Open Seastead
                    </Typography>
                </Paper>
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
