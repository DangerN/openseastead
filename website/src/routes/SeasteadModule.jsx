import Box from '@mui/material/Box';
import {useOutletContext, Outlet} from "react-router-dom";

function SeasteadModule() {

    const { isMobile, drawerWidth} = useOutletContext()

    return <Box sx={ isMobile ? { flexGrow: 1} : { flexGrow: 1, pl: `${drawerWidth}px`}}>
        <Outlet/>
    </Box>
}

export default SeasteadModule
