import {Toolbar, Typography} from "@mui/material";
import GridContainer from "../../components/GridContainer";
import GridTextItem from "../../components/GridTextItem";
import GridEmpty from "../../components/GridEmpty";

function PlanBusiness() {
    return <>
        <Toolbar/>
        <GridContainer>
            <GridTextItem gridProps={{md: 12}}>
                <Typography variant={'h3'} >Business</Typography>
                <Typography paragraph/>
                <Typography paragraph>
                    While we are committed to providing plans, designs, manuals, etc. for free to the public forever, we can still sustain ourselves.
                    There already exist many similar models in open source software, open source seasteading can do the same.
                </Typography>
            </GridTextItem>
            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Construction and Sale of Modules</Typography>
                <Typography paragraph>
                    We will use our trusted network to build and deliver.
                    If you purchase from us, you can be assured of the highest standards from start to finish.
                    Raspberry Pi
                </Typography>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Training and Certification</Typography>
                <Typography paragraph>
                    Can train and certify builders.
                </Typography>
                <Typography paragraph>
                    Can train people on operations of seasteads.
                </Typography>
                <Typography paragraph>

                </Typography>
            </GridTextItem>
            <GridEmpty right/>

            <GridEmpty/>
            <GridTextItem>
                <Typography variant={'h4'}>Administration</Typography>
                <Typography paragraph>
                </Typography>
                <Typography paragraph>
                    We can use our knowledge and experience to administer and maintain your seastead.
                    Consider this: seasteading takes off and a large hospitality company wants to get in on the action.
                    A relationship where we operate the functioning of the seastead and a company operates the hospitality.
                    People already stay for extended periods of time on cruise ships, why not take a 3 month float up the coast of South America and through the Caribbean?
                    Seastead is eco-restorative, cruise ship pollutes.
                </Typography>
            </GridTextItem>
            <GridEmpty right/>
        </GridContainer>
    </>
}

export default PlanBusiness
