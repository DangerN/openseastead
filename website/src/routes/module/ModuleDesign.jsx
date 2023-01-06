import {Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";
import GridEmpty from "../../components/GridEmpty";

function ModuleDesign() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem gridProps={{md: 12}}>
                <Typography variant={'h3'}>Design</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    When designing our module, we took
                </Typography>
            </GridTextItem>
            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Shape</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    We chose a spar for the module hull due to it being a highly stable configuration.
                    Modules connecting together in a triangular fashion has several purposes.
                    It allows a variety of stable configuration. Also triangle strong.
                    Additionally, it allowed us to control(eliminate? reduce?) vortex shedding and potential induced vibrations.
                    Allows active stabilization with engines.
                </Typography>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Size</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    We wanted to have our smallest(class 1?) modules be small enough to be transported as relatively normal freight.
                    This has several advantages.
                    Fabrication can be performed away from the coast, making it more cost effective.
                    Can be shipped by truck, rail, or ship with specialized equipment.
                    Small enough to be for legal purposes.
                    Does not need to be registered with USCG.
                </Typography>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Inflatables</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    Lower cost, easy to repair, manufacture.
                    Can store extra parts.
                    Extremely lightweight, keeps center of gravity low.
                    Easy to customize, integrate with other seastead designs.
                </Typography>
            </GridTextItem>
            <GridEmpty right/>

        </GridContainer>
    </>
}

export default ModuleDesign
