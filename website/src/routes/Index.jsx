import {Box, Button, Link, Typography} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import GridTextItem from "../components/GridTextItem";
import GridContainer from "../components/GridContainer";
import {Link as RouterLink} from "react-router-dom";
import GridEmpty from "../components/GridEmpty";
// import Grid from "@mui/material/Unstable_Grid2";


function Index() {
    const theme = useTheme();
    return <>
        <Box sx={{ flexGrow: 1, background: 'url(assets/images/pexels-belle-co-847393.jpg) no-repeat center center', backgroundSize: 'cover', height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
            <Typography variant={'h2'} align={'center'} style={{color: theme.palette.common.white, fontFamily: "'Cinzel Decorative', cursive"}}>Open Seastead</Typography>
            <Typography variant={'h4'} align={'center'} style={{color: theme.palette.common.white}}>A Revolution in the Built Environment</Typography>
        </Box>
        <GridContainer>
            <GridEmpty />
            <GridTextItem>
                <Typography variant={'h3'}>Our Mission</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    At Open Seastead we are focused on developing technologies to make the dream of <Link href='https://www.seasteading.org/' target='_blank' rel="noopener noreferrer">seasteading</Link> a reality.
                    Our planet has so much potential for green, sustainable growth. We will help to unlock it.
                </Typography>
                <Typography paragraph>
                    We are creating a framework for humanity to live permanently on the open ocean.
                    Our first modules can be used to create small communities supporting tourism and marine industry.
                    In the future, larger modules will form fully fledged floating cities.
                </Typography>
                <Typography paragraph>
                    We will be successful by starting small and taking measured, deliberate steps towards our goal.
                    Rome was not built in a day, and floating cities are no exception.
                </Typography>
                <Box textAlign={'center'}>
                    <Button component={RouterLink} to={'/the-module'} variant={'contained'} color={'secondary'} fullWidth sx={{maxWidth: '400px', margin: '0 auto'}} >
                        Check Out the Module
                    </Button>
                </Box>
            </GridTextItem>
            <GridEmpty right/>
            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h3'}>Eco Restorative Philosophy</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    To build a sustainable future, we must stop thinking in terms of waste and instead consider the full lifecycle of what we produce.
                    Nothing goes away, it is merely transformed into something else.
                </Typography>
                <Typography paragraph>
                    For much of history humanity was able to rely on natural processes to maintain balance with our environment.
                    Wooden structures were eventually claimed by rot and returned to the environment.

                    With the advent of industrialization and artificial materials this was no longer the case.
                    While plastics may erode into smaller pieces, there are no decomposers to break down.
                    Therefor the task falls to us.
                </Typography>
                <Typography paragraph>
                    Our design incorporates nylon, one of the main artificial materials found in our oceans.
                    By recycling nylon into structural components of the seastead, we create additional space for humanity to live as well as help restore our oceans.
                </Typography>
            </GridTextItem>
            <GridEmpty right/>
            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h3'}>Committed to Open Source</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    We believe that sharing knowledge enriches us all.
                    As such, we will make all plans, designs, and documentation freely available to the public.
                    We will also record our journey every step of the way so that the seasteading community at large can share in our triumphs as well as learn from our mistakes.
                </Typography>
                <Typography paragraph>
                    Where possible, we will utilize open source technologies so that anyone can contribute.
                </Typography>
            </GridTextItem>
        </GridContainer>
    </>
}

export default Index
