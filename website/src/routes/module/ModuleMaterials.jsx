import {Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";
import GridEmpty from "../../components/GridEmpty";

function ModuleMaterials() {
    return <>
        <Toolbar/>
        <GridContainer>
            {/*<GridEmpty/>*/}
            <GridTextItem gridProps={{md: 12}}>
                <Typography variant={'h3'}>Materials</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    Everything with a beginning has end, and a seastead module is no different.
                    Planning for the end of life of each module and it's constituent components will ensure(recycling).
                </Typography>
                {/*<Typography paragraph>*/}
                {/*    Our current estimation for the lifespan of a module is 25 years.*/}
                {/*    While this may seem short compared to terrestrial habitation, this is in line with expectations */}
                {/*</Typography>*/}
            </GridTextItem>
            {/*<GridEmpty right/>*/}

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Reef</Typography>
                <Typography paragraph/>
                <Typography paragraph>

                </Typography>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Spar</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    50+ Years
                </Typography>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Inflatables</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    5-10 years?
                    TPU coated nylon. Breakdown from the sun.
                    Both can be recycled.
                    TPU seperated from the nylon.
                </Typography>
            </GridTextItem>
            <GridEmpty right/>

        </GridContainer>
    </>
}

export default ModuleMaterials
