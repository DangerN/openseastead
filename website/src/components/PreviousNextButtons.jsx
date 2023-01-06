import Grid from "@mui/material/Unstable_Grid2";
import {Link as RouterLink} from "react-router-dom";
import {Button} from "@mui/material";

function PreviousNextButtons(props) {
    return <Grid xs={12} container>
        <Grid xs={0.5} md={3}/>
        <Grid xs={5} md={3}>
            <Button component={RouterLink} to={props.previousPath} fullWidth variant={'outlined'}>
                Previous: {props.previousName}
            </Button>
        </Grid>
        <Grid xs={1} md={1}/>
        <Grid xs={5} md={3}>
            <Button component={RouterLink} to={props.nextPath} fullWidth variant={'outlined'}>
                Next: {props.nextName}
            </Button>
        </Grid>
        <Grid xs={0.5} md={3}/>
        <Grid xs={12} md={12} sx={{height: '2rem'}}/>
    </Grid>
}

export default PreviousNextButtons
