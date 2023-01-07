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
                    When designing our module, our main criteria were that it needed to be stable, mobile, and independent.
                    Inspired by commercial and industrial vessels, we put practicality at the forefront of our process.
                </Typography>
            </GridTextItem>
            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Shape</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    We chose a spar for the module hull due to it being a highly stable configuration.
                    Connecting modules together to form triangles has several purposes.
                    Triangles are an inherently strong shape.
                    They also allow for a great variety of configurations
                    Additionally, it allowed us to control vortex shedding induced vibrations found with repeating columns.
                    We can also use thrusters for active stabilization.
                </Typography>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Size</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    We wanted to have our first modules be small enough to be transported like normal freight.
                    This provides several advantages.
                    Fabrication can be performed away from the coast, making it more cost effective.
                    We can easily deliver a module anywhere in the world utilizing truck, rail, or ship.
                    The smaller size also comes with fewer regulations when flying a United States flag.
                </Typography>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Inflatables</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    We chose to incorporate inflatables into our design due to their light weight, ease of repair, and low manufacturing cost.
                    Spare parts can be easily stored within the module.
                    Their light weight helps to keep the cent of mass low which helps stability.
                    Inflatables can be readily customized, allowing for a variety of uses as well as integration with other seastead designs.
                </Typography>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Mobility</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    To fully realize the benefits of modular infrastructure each module must be able to propel itself.
                    A mobile seastead will be able to outrun a storm instead of weathering it.
                    This reduces risk as well as wear and tear.
                </Typography>
            </GridTextItem>
            <GridEmpty right/>

        </GridContainer>
    </>
}

export default ModuleDesign
