import {Typography, Toolbar, Button} from "@mui/material";
// import GridImageItem from "../../components/GridImageItem";
import GridTextItem from "../../components/GridTextItem";
import GridContainer from "../../components/GridContainer";
import {Link as RouterLink} from "react-router-dom";
import GridEmpty from "../../components/GridEmpty";

function ModuleIndex() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem gridProps={{md: 12}}>
                <Typography variant={'h3'}>The Module</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    The module is the base on which a seastead is built.
                    A single unit of seastead.
                    Our initial module will be like a 2 bedroom apartment.
                    The basic habitation module.
                    After that, we can add additional housing, a greenhouse, workshoppe, and other things.
                    Proof of concept is what we're looking for.
                </Typography>
            </GridTextItem>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Design</Typography>
                <Typography paragraph>
                    There are reasons we made the design choices we did.
                </Typography>
                <Button component={RouterLink} to={'design'} variant={'outlined'} >
                    Design
                </Button>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Safety</Typography>
                <Typography paragraph>
                    It's safe enough.
                </Typography>
                <Button component={RouterLink} to={'construction'} variant={'outlined'} >
                    Safety
                </Button>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Onboard Computer</Typography>
                <Typography paragraph>
                    The onboard computer manages the various systems of the module.
                    It is responsible for dynamic positioning, resource management, and coordinating with other modules.
                </Typography>
                <Button component={RouterLink} to={'onboard-computer'} variant={'outlined'} >
                    Onboard Computer
                </Button>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Propulsion</Typography>
                <Typography paragraph>
                    It goes. Not fast, but it goes.
                </Typography>
                <Button component={RouterLink} to={'sea-trials'} variant={'outlined'} >
                    Propulsion
                </Button>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Energy</Typography>
                <Typography paragraph>
                    Generate energy.

                </Typography>
                <Button component={RouterLink} to={'location'} variant={'outlined'} >
                    Energy
                </Button>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Habitation</Typography>
                <Typography paragraph>
                    It is habitable
                </Typography>
                <Button component={RouterLink} to={'business'} variant={'outlined'} >
                    Habitation
                </Button>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Materials</Typography>
                <Typography paragraph>
                    Gotta make it out of something.
                </Typography>
                <Button component={RouterLink} to={'materials'} variant={'outlined'} >
                    Materials
                </Button>
            </GridTextItem>
            <GridEmpty right/>

        </GridContainer>
    </>
}

export default ModuleIndex
