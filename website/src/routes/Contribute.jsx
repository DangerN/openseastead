import {Box, Button, Paper, Toolbar, Typography} from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Unstable_Grid2'

function Contribute() {
    return <>
        <Toolbar/>
        <Grid container sx={{margin: '1rem'}} spacing={2}>
            <Grid xs={12}>
                <Typography variant={'h3'} align={'center'}>How can I help?</Typography>
            </Grid>
            <Grid xs={12}>
                <Paper>
                    <Box p={2}>
                        <Typography variant={'h4'}>Social</Typography>
                        <Typography paragraph></Typography>
                        <Typography paragraph>Something something dependant on a community. The socials. Like and subscribe.</Typography>
                        <Typography paragraph>Sign up for the newsletter why not?</Typography>
                        <Typography paragraph></Typography>
                        <Button disabled variant='contained'>Newsletter Sign Up</Button>
                        <Typography paragraph></Typography>
                        <Grid container spacing={1}>
                            <Grid>
                                <Button href='https://github.com/DangerN/openseastead' disabled target="_blank" rel="noopener noreferrer" startIcon={<YouTubeIcon/>} variant={'contained'}>YouTube</Button>
                            </Grid>
                            <Grid>
                                <Button href='' disabled target="_blank" rel="noopener noreferrer" startIcon={<TwitterIcon/>} variant={'contained'}>Twitter</Button>
                            </Grid>
                            <Grid>
                                <Button href='' disabled target="_blank" rel="noopener noreferrer" startIcon={<LinkedInIcon/>} variant={'contained'}>LinkedIn</Button>
                            </Grid>
                            <Grid>
                                <Button href='' disabled target="_blank" rel="noopener noreferrer" startIcon={<RedditIcon/>} variant={'contained'}>Reddit</Button>
                            </Grid>
                            <Grid>
                                <Button href='' disabled target="_blank" rel="noopener noreferrer" startIcon={<FacebookIcon/>} variant={'contained'}>Facebook</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Grid>
            <Grid xs={12}>
                <Paper>
                    <Box p={2}>
                        <Typography variant={'h4'}>Financial</Typography>
                        <Typography paragraph></Typography>
                        <Typography paragraph>Were super stoked you're interested in giving us financial support.</Typography>
                        <Typography paragraph>We plan to start fundraising late spring of 2023. Stay tuned!</Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid xs={12}>
                <Paper>
                    <Box p={2}>
                        <Typography variant={'h4'}>Technical</Typography>
                        <Typography paragraph></Typography>
                        <Button href='https://github.com/DangerN/openseastead' target="_blank" rel="noopener noreferrer" variant='contained' startIcon={<GitHubIcon/>}>
                            GitHub
                        </Button>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    </>
}

export default Contribute
