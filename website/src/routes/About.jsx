import {Toolbar, Typography} from "@mui/material";
import GridContainer from "../components/GridContainer";
import GridTextItem from "../components/GridTextItem";

function About() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem gridProps={{md: 12}}>
                <Typography variant={'h3'}>
                    About Us
                </Typography>
                <Typography paragraph/>
                <Typography>
                    Stuff about our organization.
                </Typography>
            </GridTextItem>
        </GridContainer>
    </>
}

export default About
