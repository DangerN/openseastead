import Grid from '@mui/material/Unstable_Grid2'
import {Typography, Paper} from "@mui/material";

function ModuleIndex() {
    return <Grid container spacing={2} sx={{m: 1}}>
        <Grid xs={12} >
            <Paper sx={{pl: 2}}>
                <Typography variant={'h3'}>The Module</Typography>
                <Typography paragraph>Im more info</Typography>
            </Paper>
        </Grid>
        <Grid xs={12} md={6}>
            <Paper >
                <img alt={'placeholder'} width={'100%'} src={'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg'}/>
            </Paper>
        </Grid>
        <Grid xs={12} md={6}>
            <Paper >
                <Typography paragraph>Im text related to the image</Typography>
            </Paper>
        </Grid>
    </Grid>
}

export default ModuleIndex
