import {Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";

function PlanLocation() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem>
                <Typography variant={'h3'}>Location</Typography>
                <Typography paragraph/>
                <Typography paragraph>I'm the location text.</Typography>
            </GridTextItem>
        </GridContainer>
    </>
}

export default PlanLocation
