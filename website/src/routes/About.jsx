import {Container} from "@mui/material";
import Markdown from "../components/Markdown";

function About() {
    return <Container>
        <Markdown url={'assets/markdown/about.md'}/>
    </Container>
}

export default About
