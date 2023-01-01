import {Typography, Toolbar, Button} from "@mui/material";
import GridImageItem from "../../components/GridImageItem";
import GridTextItem from "../../components/GridTextItem";
import GridContainer from "../../components/GridContainer";
import {Link as RouterLink} from "react-router-dom";

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
            <GridImageItem imageProps={{src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg'}}/>
            <GridTextItem>
                <Typography paragraph>Im text related to the image</Typography>
            </GridTextItem>
            <GridImageItem imageProps={{src: 'https://images.pexels.com/photos/4316/technology-computer-chips-gigabyte.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>
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
        </GridContainer>
    </>
}

export default ModuleIndex
