import {Button, Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";
import GridEmpty from "../../components/GridEmpty";
import {Link as RouterLink} from "react-router-dom";

function PlanIndex() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem gridProps={{md: 12}}>
                <Typography variant={'h3'}>The Plan</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    Our plan begins with the launch of a single module.
                    From there, we will add several more until we have created a floating R&D facility.
                </Typography>
            </GridTextItem>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Construction</Typography>
                <Typography paragraph>
                    Construction will take place at a location yet to be determined.
                </Typography>
                <Button component={RouterLink} to={'construction'} variant={'outlined'} >
                    Construction
                </Button>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Launch</Typography>
                <Typography paragraph>
                    After construction is completed, we will launch the first module.
                </Typography>
                <Button component={RouterLink} to={'launch'} variant={'outlined'} >
                    Launch
                </Button>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Sea Trials</Typography>
                <Typography paragraph>
                    Once deployed, trails of the seastead will need to be conducted to ensure it behaves as expected.
                </Typography>
                <Button component={RouterLink} to={'sea-trials'} variant={'outlined'} >
                    Sea Trials
                </Button>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Location</Typography>
                <Typography paragraph>
                    Initially, we will locate our seastead about 20 miles off the coast of Corpus Christi, TX.

                </Typography>
                <Button component={RouterLink} to={'location'} variant={'outlined'} >
                    Location
                </Button>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Business</Typography>
                <Typography paragraph>
                    If we give away our plans how will we make any money?
                    Even a non-profit needs a way to sustain itself.

                </Typography>
                <Button component={RouterLink} to={'business'} variant={'outlined'} >
                    Business
                </Button>
            </GridTextItem>
            <GridEmpty right/>

        </GridContainer>
    </>
}

export default PlanIndex
