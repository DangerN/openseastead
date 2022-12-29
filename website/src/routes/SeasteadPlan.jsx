import {Outlet, useOutletContext} from "react-router-dom";
import Box from "@mui/material/Box";

function SeasteadPlan() {
    const { isMobile, drawerWidth} = useOutletContext()

    return <Box sx={ isMobile ? { flexGrow: 1} : { flexGrow: 1, pl: `${drawerWidth}px`}}>
        <Outlet/>
    </Box>
}

export default SeasteadPlan
