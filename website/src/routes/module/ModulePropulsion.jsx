import {Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";
import GridImageItem from "../../components/GridImageItem";

function ModulePropulsion() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem gridProps={{md: 12}}>
                <Typography variant={'h3'}>Propulsion</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    Each module is self propelled.
                    This allows a module to station keep in deep water as well as travel across the seas.
                </Typography>
                <Typography paragraph>
                    Like a school of fish, multiple connected modules move as one.
                </Typography>
            </GridTextItem>
            <GridImageItem imageProps={{alt: 'Tri axial thruster detail.'}} />
            <GridTextItem>
                <Typography variant={'h4'}>Tri-axial Thruster Cluster</Typography>
                <Typography paragraph>
                    The propulsion unit consists of three ducted rim driven electric thrusters.
                    Thrusters are arranged to provide thrust at 60° angles from one another.
                    The cluster is located in the center of the module.
                    There are several advantages to this arrangement.
                </Typography>
                <Typography variant={'h5'}>Safety</Typography>
                <Typography paragraph>
                    By concealing the propeller blades within the hull the possibility of a prop strike on divers or marine mammals is eliminated.
                </Typography>
                <Typography variant={'h5'}>Reliability</Typography>
                <Typography paragraph>
                    Rim driven thrusters are much more resistant to fouling then their hub driven counterparts as there is no central axle for debris to get wrapped around.
                    Additionally, an electric rim driven thruster has only a single moving part: the propeller itself.
                </Typography>
                <Typography variant={'h5'}>Maintenance</Typography>
                <Typography paragraph>
                    When it comes time to repair or replace a thruster, the ducts can be closed with a gate value and drained.
                    Thrusters can then be serviced while at sea.
                </Typography>
            </GridTextItem>
            <GridImageItem imageProps={{alt: 'Tri axial thruster detail.'}} />
            <GridTextItem>
                <Typography variant={'h4'}>Station Keeping</Typography>
                <Typography paragraph>
                    A seastead will need to be able to be stay in place maybe.
                </Typography>
                <Typography variant={'h5'}>Anchoring</Typography>
                <Typography paragraph>Anchoring is suitable for single modules in shallow water.</Typography>
                <Typography variant={'h5'}>Dynamic Positioning</Typography>
                <Typography paragraph>Automated system keeps seastead in same general area.</Typography>
            </GridTextItem>
            <GridImageItem imageProps={{alt: 'Tri axial thruster detail.'}} />
            <GridTextItem>
                <Typography variant={'h4'}>Travel</Typography>
                <Typography variant={'h5'}>Ocean Current</Typography>
                <Typography paragraph>
                    The preferred method of long range travel utilizes ocean currents.
                    A seastead can travel great distances using relatively little energy.
                </Typography>
            </GridTextItem>
            <GridImageItem imageProps={{alt: 'Tri axial thruster detail.'}} />
            <GridTextItem>
                <Typography variant={'h4'}>Seakeeping</Typography>
                <Typography paragraph>
                    This might belong in safety?
                </Typography>
            </GridTextItem>
        </GridContainer>
    </>
}

export default ModulePropulsion
