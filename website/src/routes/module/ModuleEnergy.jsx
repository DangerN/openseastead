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
                <Typography paragraph>I'm the energy text.</Typography>
            </GridTextItem>
            <GridImageItem imageProps={{src: 'https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>
            <GridTextItem>
                <Typography variant={'h4'}>Solar</Typography>
                <Typography paragraph>
                    Sun.
                </Typography>
            </GridTextItem>
            <GridImageItem imageProps={{src: 'https://images.pexels.com/photos/698485/pexels-photo-698485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>
            <GridTextItem>
                <Typography variant={'h4'}>LiFePO4 Batteries</Typography>
                <Typography paragraph>
                    Sun.
                </Typography>
            </GridTextItem>
            <GridImageItem imageProps={{src: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>
            <GridTextItem>
                <Typography variant={'h4'}>Diesel Engine</Typography>
                <Typography paragraph>
                    Used as a backup, fill in gaps. Intend to switch to GREEN bio-diesel or remove in later versions.
                </Typography>
            </GridTextItem>
        </GridContainer>
    </>
}

export default ModuleEnergy
