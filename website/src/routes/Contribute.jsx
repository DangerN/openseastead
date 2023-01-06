import {Box, Button, Modal, Paper, TextField, Toolbar, Typography} from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Unstable_Grid2'
import {useState} from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import MuiAlert from "@mui/material/Alert";
import {useOutletContext} from "react-router-dom";


const newsModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    maxWidth: '95%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    outline: 0,
    display: 'flex',
    flexDirection: 'column',
};

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    firstName: yup
        .string('Enter your first name')
        .required('First name is required'),
    lastName: yup
        .string('Enter your last name')
        .required('Last name is required'),
});

function Contribute() {
    const { isMobile, drawerWidth} = useOutletContext()

    const [newsModalOpen, setNewsModalOpen] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
            // alert(JSON.stringify(values, null, 2));
            fetch('https://openseastead.org/api/news/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        },
    });


    return <Box sx={ isMobile ? { flexGrow: 1} : { flexGrow: 1, pl: `${drawerWidth}px`}}>
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
                        <Typography paragraph>Something something a community. The socials. Like and subscribe.</Typography>
                        <Typography paragraph>Sign up for the newsletter why not?</Typography>
                        <Typography paragraph></Typography>
                        <Button
                            variant='contained'
                            onClick={()=>setNewsModalOpen(true)}
                        >
                            Newsletter Sign Up
                        </Button>
                        <Typography paragraph></Typography>
                        <Grid container spacing={1}>
                            <Grid>
                                <Button href='https://github.com/DangerN/openseastead' disabled target="_blank" rel="noopener noreferrer" startIcon={<YouTubeIcon/>} variant={'contained'}>YouTube</Button>
                            </Grid>
                            <Grid>
                                <Button href='' disabled target="_blank" rel="noopener noreferrer" startIcon={<TwitterIcon/>} variant={'contained'}>Twitter</Button>
                            </Grid>
                            <Grid>
                                <Button href='https://www.linkedin.com/company/open-seastead/' target="_blank" rel="noopener noreferrer" startIcon={<LinkedInIcon/>} variant={'contained'}>LinkedIn</Button>
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
        <Modal
            open={newsModalOpen}
            onClose={()=>setNewsModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={newsModalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">Newsletter Sign Up</Typography>
                <Typography paragraph/>
                <Grid container spacing={2} component='form' onSubmit={formik.handleSubmit}>
                    <Grid xs={12}>
                        <MuiAlert severity={'error'} variant={'filled'}>
                            Sign up is in test mode. Submissions will not be processed.
                        </MuiAlert>
                    </Grid>
                    <Grid xs={12}>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>
                    <Grid xs={12}>
                        <TextField
                            fullWidth
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            type="text"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                    </Grid>
                    <Grid xs={12}>
                        <TextField
                            fullWidth
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            type="text"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                    </Grid>
                    <Grid xs={12}>
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    </Box>
}

export default Contribute
