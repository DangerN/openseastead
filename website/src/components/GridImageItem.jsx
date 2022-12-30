import {Paper} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function GridImageItem(props) {
    const defaultSrc = `https://via.placeholder.com/${props.imageProps.width || '600'}x${props.imageProps.height || '400'}.png?text=Image+Not+Found`

    return <Grid xs={12} md={6} {...props.gridProps}>
        <Paper elevation={0} {...props.paperProps}>
            <img alt={'placeholder'} width={'100%'} src={defaultSrc} {...props.imageProps}/>
        </Paper>
    </Grid>
}

export default GridImageItem
