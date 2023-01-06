import {Box, Paper, Toolbar, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";
import GridImageItem from "../../components/GridImageItem";

function ModuleSafety() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem gridProps={{md: 12}}>
                <Typography variant={'h3'}>Module Safety</Typography>
                <Typography paragraph />
                <Typography paragraph>Im more info</Typography>
            </GridTextItem>
            <GridImageItem imageProps={{alt: 'Watertight compartments.'}} />
            <GridTextItem>
                <Typography variant='h4'>Watertight Compartments</Typography>
                <Typography paragraph>
                    Each of the eight decks can be sealed to form watertight compartments.
                    Watertight electrical systems ensure power is not lost in case of a hull breach.
                </Typography>
            </GridTextItem>
            <GridImageItem imageProps={{alt: 'Inflatable beems.'}} />
            <GridTextItem>
                <Typography variant='h4'>Inflatable Beams</Typography>
                <Typography paragraph/>
                <Typography paragraph>Strength: Can recover from failure :)</Typography>
                <Typography paragraph>Weakness: Can be melted by jet fuel :(</Typography>
            </GridTextItem>
            <GridImageItem imageProps={{alt: 'Safety equitmemt.', src: 'https://cdn.pixabay.com/photo/2014/01/10/19/26/life-raft-241788_960_720.jpg'}} />
            <GridTextItem>
                <Typography variant='h4'>Safety Equipment</Typography>
                <Typography paragraph>Modules will be well equipped to avoid disaster. Every </Typography>
                <Typography variant={'h5'}>Life Raft and Floatation Devices</Typography>
                <Typography paragraph>Each module will be equipped with a life raft as well as PFDs and throwable life rings.</Typography>
                <Typography variant={'h5'}>VHF Radio</Typography>
                <Typography paragraph>Radio is an essential tool</Typography>
                <Typography variant={'h5'}>Class B AIS Transponder</Typography>
                <Typography paragraph>
                    It is important for a seastead to both see and be seen.
                </Typography>
            </GridTextItem>
            <GridImageItem imageProps={{alt: 'redundancy'}} />
            <GridTextItem>
                <Typography variant='h4'>Redundancy</Typography>
                <Typography paragraph>
                    Critical systems will
                    Every module has the same systems that work together. Can share power and data.
                    Unlikely all the motors fail on all connected modules simultaneously.
                    Redundant automated systems. One module can take over for other if it fails.
                </Typography>
            </GridTextItem>
        </GridContainer>
        <Grid container spacing={2} sx={{m: 1}}>
            <Grid xs={12} md={6}>
                <Paper>
                    <Box p={2}>

                    </Box>
                </Paper>
            </Grid>
        </Grid>
    </>
}

export default ModuleSafety
