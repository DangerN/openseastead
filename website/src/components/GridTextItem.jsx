import {Box, Paper} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function GridTextItem(props) {
    return <Grid xs={12} md={6} {...props.gridProps}>
        <Paper {...props.paperProps}>
            <Box p={2} {...props.boxProps}>
                { props.children }
            </Box>
        </Paper>
    </Grid>
}

export default GridTextItem