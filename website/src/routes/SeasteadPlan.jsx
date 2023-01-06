import {Outlet, useOutletContext} from "react-router-dom";
import Box from "@mui/material/Box";

function SeasteadPlan() {
    const { isMobile, drawerWidth, previousNextButtons } = useOutletContext()

    return <Box sx={ isMobile ? { flexGrow: 1} : { flexGrow: 1, pl: `${drawerWidth}px`}}>
        <Outlet/>
        {previousNextButtons}
    </Box>
}

export default SeasteadPlan
