import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {Outlet, Link as RouterLink} from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

function Root(props) {
    return <>
        <CssBaseline />
        <Box sx={{ flexGrow: 1, height: '100vh' }}>
            <AppBar position='static'>
                <Toolbar>
                    {/*<Typography variant='h5' component={RouterLink} to={'/'} sx={{ flexGrow: 1 }}>Open Seastead</Typography>*/}
                    <Button component={RouterLink} to={'/'} color={'inherit'} sx={{ flexGrow: 1 }}>
                        <Typography variant='h5' >Open Seastead</Typography>
                    </Button>
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
                </Toolbar>
            </AppBar>
            { props.errorPage ? <ErrorPage/> : <Outlet/> }
        </Box>
    </>
}

export default Root
