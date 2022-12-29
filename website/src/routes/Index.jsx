import {Box, Paper, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from '@mui/material/styles';


function Index() {
    const theme = useTheme();
    return <>
        <Box sx={{ flexGrow: 1, background: 'url(assets/images/pexels-belle-co-847393.jpg) no-repeat center center', backgroundSize: 'cover', height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
            <Typography variant={'h2'} align={'center'} style={{color: theme.palette.common.white, fontFamily: "'Cinzel Decorative', cursive"}}>Open Seastead</Typography>
            <Typography variant={'h4'} align={'center'} style={{color: theme.palette.common.white}}>A Revolution in the Built Environment</Typography>
        </Box>
        <Grid container spacing={2} sx={{margin: '1rem'}}>
            <Grid xs={12}>
                <Paper>
                    <Box p={2}>
                        <Typography variant={'h3'}>Our Purpose</Typography>
                        <Typography paragraph/>
                        <Typography paragraph>
                            At Open Seastead we are focused on developing technologies to make the dream of seasteading a reality.
                        </Typography>
                        <Typography paragraph>
                            We are creating a framework
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid xs={12}>
                <Paper>
                    <Box p={2}>
                        <Typography variant={'h3'}>Zero Waste Philosophy</Typography>
                        <Typography paragraph/>
                        <Typography paragraph>
                            Nothing is waste.
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid xs={12}>
                <Paper >
                    <Box p={2}>
                        <Typography variant={'h3'}>Committed to Open Source</Typography>
                        <Typography paragraph>
                            We believe that the sharing of knowledge enriches us all.
                        </Typography>
                        <Typography paragraph>
                            We have built on open source technologies to bring this design.
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    </>
}

export default Index
