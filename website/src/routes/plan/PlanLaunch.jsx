import {Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";
import GridEmpty from "../../components/GridEmpty";

function PlanLaunch() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem gridProps={{md: 12}}>
                <Typography variant={'h3'} >Launch</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    The launch procedure should be completed in a single day.
                    Afterwards, sea trails can begin.
                </Typography>
            </GridTextItem>
            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Transport</Typography>
                <Typography paragraph>
                    After the module components are constructed, they need to be transported to the port for final assembly and launch.
                    Transit will require two flatbed semi-trucks.
                    One will carry the spar hull and the other will carry the reef sections and inflatable components.
                </Typography>
            </GridTextItem>
            <GridEmpty right/>
            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Final Assembly</Typography>
                <Typography paragraph>
                    Final assembly is carried out on the launch ramp in a protected harbor.
                    To begin, the spar truck backs down the ramp until end of the spar is submerged.
                    Then, the reef truck is backed down parallel to the spar truck until the first reef segment is submerged.
                    The first reef segment then has an inflatable attached to neutralize it's buoyancy.
                    Next, it is moved into position at the end of the spar and pinned in place.
                    This process is repeated for the remaining five segments.
                </Typography>
                <Typography paragraph>
                    While the reef is being affixed, the deflated beams and cap will be connected to the top of the spar.
                    Additionally, pre-launch checks of the on board computer system will be made through the auxiliary port.
                    Finally, temporary floats are secured to the spar to keep it horizontal while it is towed into position.
                </Typography>
            </GridTextItem>
            <GridEmpty right/>
            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Launch</Typography>
                <Typography paragraph>
                    After all preparations are made, the assembled module is released from the truck bed.
                    The truck then backs down the launch ramp until the spar is floating freely.
                    The support craft then tows the boat out of the harbor.
                </Typography>
                <Typography paragraph>
                    After all preparations are made, the assembled module is released from the truck bed.
                    The truck then backs down the launch ramp until the spar is floating freely.
                    The support craft then tows the boat out of the harbor.
                </Typography>
                <Typography paragraph>
                    Once an appropriate position and depth is reached operations to right and board the module can begin.
                    First, the lines securing the beams and cap are released.
                    At the same time, the dock is inflated.
                    Then, the floats on the spar are deflated allowing it come upright.
                    The dock is moved into position and the clamp ring is inflated, securing it to the spar.
                    At this point, the dock is anchored.
                    From the auxiliary port, the module is commanded to begin inflating the cap and beams.
                    The module can now be boarded.
                </Typography>
            </GridTextItem>
        </GridContainer>
    </>
}

export default PlanLaunch
