import {Link, Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";
import GridEmpty from "../../components/GridEmpty";

function ModuleComputer() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem gridProps={{md: 12}}>
                <Typography variant={'h3'} >Computer</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    The computer does lots of things. Automation.
                </Typography>
            </GridTextItem>
            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Navigation and Dynamic Positioning</Typography>
                <Typography paragraph>
                    It drives the module.
                </Typography>
            </GridTextItem>
            <GridEmpty right/>
            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Resource Management</Typography>
                <Typography paragraph>
                    Manages the resources on a module.
                    Different module types will have different resources.
                    For example, a greenhouse module will have it's hydroponic systems monitored and controlled by the computer.
                    A WEC(Wave Energy Capture) module would have power generation managed by the computer.
                </Typography>
                <Typography paragraph>
                    THe computer will also be able to coordinate the sharing of common resources such as water and power.
                </Typography>
            </GridTextItem>
            <GridEmpty right/>
            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Coordination</Typography>
                <Typography paragraph>
                    When multiple modules are connected, their computers will coordinate with one another to make the seastead work as a whole.
                </Typography>
                <Typography variant={'h5'}>Communication</Typography>
                <Typography paragraph>
                    When a physical connection is made between modules, a data connection is also established.
                    Modules can then broadcast information about themselves to others.
                    They can also pass information along.
                </Typography>
                <Typography variant={'h5'}>
                    Command
                </Typography>
                <Typography paragraph>
                    Each seastead will need to have a command module that is responsible for coordinating the motions of all the modules in the seastead.
                    A single module seastead will always be able to command itself.
                    When modules connect or disconnect, they will <Link href='https://en.wikipedia.org/wiki/Leader_election' target='_blank' rel="noopener noreferrer">automatically resolve a leader</Link>.
                    When modules connect, one leader will need to step down.
                    When modules disconnect, a leader needs to be elected in the seastead modules that were disconnected from the current leader.
                </Typography>
                <Typography paragraph>
                    Automatic leadership resolution allows the seastead to recover if the command module goes offline.
                </Typography>
            </GridTextItem>
        </GridContainer>
    </>
}

export default ModuleComputer
