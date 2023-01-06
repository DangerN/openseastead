import {Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";
// import GridEmpty from "../../components/GridEmpty";

function PlanConstruction() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem gridProps={{md: 12}}>
                <Typography variant={'h3'}>Construction</Typography>
                <Typography paragraph/>
                <Typography paragraph>I'm the construction text.</Typography>
            </GridTextItem>

            {/*<GridEmpty/>*/}
            {/*<GridTextItem>*/}
            {/*    <Typography variant={'h4'}>Training and Certification</Typography>*/}
            {/*    <Typography paragraph>*/}
            {/*        Can train and certify builders.*/}
            {/*    </Typography>*/}
            {/*    <Typography paragraph>*/}
            {/*        Can train people on operations of seasteads.*/}
            {/*    </Typography>*/}
            {/*    <Typography paragraph>*/}

            {/*    </Typography>*/}
            {/*</GridTextItem>*/}
            {/*<GridEmpty right/>*/}

        </GridContainer>
    </>
}

export default PlanConstruction
