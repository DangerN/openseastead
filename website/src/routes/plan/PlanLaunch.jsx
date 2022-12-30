import {Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";

function PlanLaunch() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem>
                <Typography variant={'h3'}>Launch</Typography>
                <Typography paragraph/>
                <Typography paragraph>I'm the launch text.</Typography>
            </GridTextItem>
        </GridContainer>
    </>
}

export default PlanLaunch
