import {Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";

function ModuleHabitation() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem gridProps={{md: 12}}>
                <Typography variant={'h3'}>Habitation</Typography>
                <Typography paragraph/>
                <Typography paragraph>I'm the habitation text.</Typography>
            </GridTextItem>
        </GridContainer>
    </>
}

export default ModuleHabitation
