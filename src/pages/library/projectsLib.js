import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Card from '@mui/material/Card';
import App from "../../components/Navbar/navbar";

const list = [1, 2, 3,4,5]


function Projects() {
    const [open, setOpen] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <Container component="section" sx={{ mt: 10, display: 'flex', justifyContent: "flex-start" }}>
                        {<App />}

            <Grid container>
                <Grid item xs={12} md={6} sx={{ zIndex: -2 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            bgcolor: 'lightgray',
                            py: 8,
                            px: 3,
                        }}
                    >
                        <Box component="main" onSubmit={handleSubmit} sx={{ minHeight: 500, maxWidth: 600 }}>
                            <Typography variant="h4" component="h4" gutterBottom>
                                مشاريع سابقة للمساق
                            </Typography>
                            <Typography variant="h7" >
                                اضغط على الرابط في الأسفل للعرض
                            </Typography>
                            <Grid item  sx={{ mt: 4 }} spacing={5}>
                                {list.map((i) => (
                                    <a href=''>
                                        <Card key={i}
                                            sx={{ height: '100%', minwidth:100, display: 'flex', flexDirection: 'column', m:2, p:2}}
                                        >
                                          بروجيكت 1
                                        </Card> 
                                    </a>
                                ))}
                            </Grid>


                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: -67,
                            left: -67,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            background: 'url(https://gitlab.create-ion.at/lt/material-ui/-/raw/v4.0.2/static/themes/onepirate/productCTAImageDots.png)',
                        }}
                    />
                    <Box
                        component="img"
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="call to action"
                        sx={{
                            position: 'absolute',
                            top: -28,
                            left: 0,
                            right: -28,
                            bottom: 0,
                            width: '100%',
                            maxWidth: 500,
                        }}
                    />
                </Grid>
            </Grid>
            <Snackbar
                open={open}
                closeFunc={handleClose}
                message="We will send you our best offers, once a week."
            />
        </Container>
    );
}

export default Projects;