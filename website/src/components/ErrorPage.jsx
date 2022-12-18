import {Container, Typography} from "@mui/material";

function ErrorPage() {
    return <Container>
        <Typography variant={'h6'}>Oh No!</Typography>
        <Typography variant={'body1'}>We couldn't find what you were looking for(404).</Typography>
    </Container>
}

export default ErrorPage
