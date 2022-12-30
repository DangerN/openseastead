import Grid from "@mui/material/Unstable_Grid2";

function GridContainer(props) {
    return <Grid container spacing={2} sx={{margin: '1rem'}} {...props} />
}

export default GridContainer
