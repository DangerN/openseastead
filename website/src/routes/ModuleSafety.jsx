import {Box, Paper, Toolbar, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function ModuleSafety() {
    return <>
        <Toolbar/>
        <Grid container spacing={2} sx={{m: 1}}>
            <Grid xs={12} >
                <Paper sx={{pl: 2}} >
                    <Typography variant={'h3'}>Module Safety</Typography>
                    <Typography paragraph>Im more info</Typography>
                </Paper>
            </Grid>
            <Grid xs={12} md={6}>
                <Paper elevation={0}>
                    <img alt={'placeholder'} width={'100%'} src={'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg'}/>
                </Paper>
            </Grid>
            <Grid xs={12} md={6}>
                <Paper >
                    <Typography paragraph>Im text related to the image</Typography>
                </Paper>
            </Grid>
            <Grid xs={12} md={6}>
                <Paper>
                    <Box p={2}>
                        <Typography variant='h5'>Watertight Compartments</Typography>
                        <Typography paragraph>Eight watertight compartments ensure no sinkey.</Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid xs={12} md={6}>
                <Paper>
                    <Box p={2}>
                        <Typography variant='h5'>Inflatable Beams</Typography>
                        <Typography paragraph/>
                        <Typography paragraph>Strength: Can recover from failure :)</Typography>
                        <Typography paragraph>Weakness: Can be melted by jet fuel :(</Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid xs={12} md={6}>
                <Paper>
                    <Box p={2}>
                        <Typography variant='h5'>Industry Standard Features</Typography>
                        <Typography paragraph/>
                        <Typography paragraph>Life raft, radio, AIS transponder. Radar if we're feeling fancy.</Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid xs={12} md={6}>
                <Paper>
                    <Box p={2}>
                        <Typography variant='h5'>Redundancy</Typography>
                        <Typography paragraph/>
                        <Typography paragraph>
                            Every module has the same systems that work together. Can share power and data.
                            Unlikely all the motors fail on all connected modules simultaneously.
                            Redundant automated systems. One module can take over for other if it fails.
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    </>
}

export default ModuleSafety
