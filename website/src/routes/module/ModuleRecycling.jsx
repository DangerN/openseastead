import {Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";

function ModuleRecycling() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem>
                <Typography variant={'h3'}>Recycling</Typography>
                <Typography paragraph/>
                <Typography paragraph>I'm the recycling text.</Typography>
            </GridTextItem>
        </GridContainer>
    </>
}

export default ModuleRecycling
