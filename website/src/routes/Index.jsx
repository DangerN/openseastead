import {Box, Button, Link, Typography} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import GridTextItem from "../components/GridTextItem";
import GridContainer from "../components/GridContainer";
import {Link as RouterLink} from "react-router-dom";
import GridEmpty from "../components/GridEmpty";



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
                </Typography>
                <Typography paragraph>
                    We are creating a framework for humanity to live permanently on the open ocean.
                    Our first modules can be used to create small communities supporting tourism and marine industry.
                    More words here.

                </Typography>
                <Typography paragraph>
                    In the future, larger modules will form fully fledged floating cities complete with (things cities have).
                </Typography>
                <Button component={RouterLink} to={'/the-module'} variant={'contained'} >
                    The Module
                </Button>
            </GridTextItem>
            <GridEmpty right/>
            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h3'}>Zero Waste Philosophy</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    Nothing is waste.
                </Typography>
            </GridTextItem>
            <GridEmpty right/>
            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h3'}>Committed to Open Source</Typography>
                <Typography paragraph>
                    We believe that the sharing of knowledge enriches us all.
                    As such, we will make all plans, designs and () freely available.
                    We will also document our journey every step of the way so that the seasteading community at large can share in our triumphs as well as learn from our mistakes.
                </Typography>
                <Typography paragraph>
                    We are builing on open source technologies so that anyone can contribute.
                </Typography>
            </GridTextItem>
        </GridContainer>
    </>
}

export default Index
