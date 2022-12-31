import Grid from "@mui/material/Unstable_Grid2";

function GridEmpty(props) {
    return <Grid sx={{ display: {xs: 'none', md: 'block'} }} md={props.right ? 4 : 2} {...props} />
}

export default GridEmpty
