import {Box, Toolbar, Typography} from "@mui/material";
import GridContainer from "../components/GridContainer";
import GridTextItem from "../components/GridTextItem";
import {useOutletContext} from "react-router-dom";

function About() {
    const {isMobile, drawerWidth} = useOutletContext()

    return <Box sx={ isMobile ? { flexGrow: 1} : { flexGrow: 1, pl: `${drawerWidth}px`}}>
        <Toolbar/>
        <GridContainer>
            <GridTextItem gridProps={{md: 12}}>
                <Typography variant={'h3'}>
                    About Us
                </Typography>
                <Typography paragraph/>
                <Typography>
                    Stuff about our organization.
                    Maybe the people involved?
                    Mention a desire to cooperate with existing governments and institutions.
                </Typography>
            </GridTextItem>
        </GridContainer>
    </Box>
}

export default About
