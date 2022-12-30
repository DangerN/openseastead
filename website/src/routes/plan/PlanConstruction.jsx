import {Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";

function PlanConstruction() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem>
                <Typography variant={'h3'}>Construction</Typography>
                <Typography paragraph/>
                <Typography paragraph>I'm the construction text.</Typography>
            </GridTextItem>
        </GridContainer>
    </>
}

export default PlanConstruction
