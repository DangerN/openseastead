import {Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";
import GridImageItem from "../../components/GridImageItem";

function ModuleEnergy() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem gridProps={{md: 12}}>
                <Typography variant={'h3'}>Energy</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    A seastead will need to be able to generate and store it's own energy.
                    Fortunately, there is a lot of it on the open ocean.
                </Typography>
            </GridTextItem>
            <GridImageItem imageProps={{src: 'https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>
            <GridTextItem>
                <Typography variant={'h4'}>Generation</Typography>
                <Typography variant={'h5'}>Solar</Typography>
                <Typography paragraph>
                    The Sun.
                    It's everywhere.
                    The first modules will be primarily solar powered.
                    The first module is planned to include a 3.2kw PV array.
                </Typography>
                <Typography variant={'h5'}>Wave</Typography>
                <Typography paragraph>
                    Lots of waves on the ocean.
                    Less aggressive in gulf or on equator, but there is still energy there.
                    An area for future R&D.
                    Efficiency will have to be improved.
                </Typography>
                <Typography variant={'h5'}>Diesel</Typography>
                <Typography paragraph>
                    We will have a diesel backup to augment solar generation.
                    Algae based bio-diesel may be able to replace it. Another area for future R&D.
                </Typography>
            </GridTextItem>
            <GridImageItem imageProps={{src: 'https://images.pexels.com/photos/698485/pexels-photo-698485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>
            <GridTextItem>
                <Typography variant={'h4'}>Storage</Typography>
                <Typography variant={'h5'}>LiFePO4 Batteries</Typography>
                <Typography paragraph>
                    Standard battery technology for boats. Generally considered safe. No heavy metals. Won't go off if punctured(unlike your lithium polymer cell battery)
                </Typography>
                <Typography variant={'h5'}>Air Tank</Typography>
                <Typography paragraph>
                    High pressure air tank allows us to store mechanical energy.
                    Used for ventilation as well as structural integrity.
                    Expanding gas for ventilation replaces need for A/C(one of the biggest power hogs)
                    Run it during the day when there is lots of excess energy.
                </Typography>
            </GridTextItem>
        </GridContainer>
    </>
}

export default ModuleEnergy
