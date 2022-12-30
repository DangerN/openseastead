import {Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";

function PlanIndex() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem>
                <Typography variant={'h3'}>Plan Overview</Typography>
                <Typography paragraph/>
                <Typography paragraph>I'm the overview text.</Typography>
            </GridTextItem>
        </GridContainer>
    </>
}

export default PlanIndex
