import {Toolbar, Typography} from "@mui/material";
import Box from "@mui/material/Box";

function ErrorPage() {
    return <Box >
        <Toolbar/>
        <Typography variant={'h6'} align={'center'}>Oh No!</Typography>
        <Typography variant={'body1'} align={'center'}>We couldn't find what you were looking for (404).</Typography>
    </Box>
}

export default ErrorPage
