import {Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";
import GridEmpty from "../../components/GridEmpty";

function PlanSeaTrials() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem gridProps={{md: 12}}>
                <Typography variant={'h3'} >Sea Trials</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    After the first module is launched, sea trials must be done to ensure the module performs as expected.
                </Typography>
            </GridTextItem>
            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Metrics</Typography>
                <Typography paragraph>
                    There are a variety cd
                </Typography>
            </GridTextItem>
            <GridEmpty right/>
        </GridContainer>
    </>
}

export default PlanSeaTrials