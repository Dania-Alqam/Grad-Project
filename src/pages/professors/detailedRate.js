import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Divider, Rating } from '@mui/material';
import { cyan } from '@mui/material/colors';
import App from "../../components/Navbar/navbar";
import ProgressBar from 'react-bootstrap/ProgressBar'


const mdTheme = createTheme();
const dificulty = [
    {v:15, d:'سهل جداً'},
    {v:5, d:'سهل'},
    {v:7, d:'متوسط'},
    {v:1, d:'صعب'},
    {v:1, d:'صعب جداً'}
];

  
function DashboardContent() {


    return (
        
        <ThemeProvider theme={mdTheme}>
            <App /> 
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            <Grid  item xs={12} sx={{ background:cyan[700] }}>
                                <Typography sx={{padding:2}} component="h3" variant="h4" color="white">
                                   إياد جابر
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={8} lg={8}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 300,
                                    }}
                                >
                                    <Box>
                                        <Typography component="h3" variant="h4" color={cyan[700]}>
                                            مستوى الصعوبة
                                        </Typography>
                                        <Divider />
                                        
 <Box sx={{mt:2.5}}>
    {dificulty.map((i) => (
                                                <>
                                                    <Typography>
                                                        {i.d}
                                                    </Typography>
                                                    <ProgressBar striped variant="info" now={i.v} label={i.v} />
                                                </>
                                            ))}



</Box>




                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} >
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 150,
                                    }}
                                >
                                    <Typography component="h4" variant="h5" color={cyan[700]}>
                                        هل الحضور مهم عند المدرس ؟
                                    </Typography>
                                    <Typography component="h4" variant="h5" color="text.secondary">
                                        نعم : 60%
                                    </Typography>
                                    <Typography component="h4" variant="h5" color="text.secondary">
                                        لا : 40%
                                    </Typography>
                                </Paper>
                                <Divider />
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 150,
                                    }}
                                >
                                    <Typography component="h4" variant="h5" color={cyan[700]}>
                                        هل تدرس مرة أخرى مع هذا المدرس ؟
                                    </Typography>
                                    <Container> 
                                    <Typography component="h5" variant="h6" color="text.secondary">
                                       نعم : 60%
                                    </Typography>
{/*                                     <ProgressBar striped variant="info" now={60} label ={60} />
 */}                                    </Container>
                                    <Typography component="h4" variant="h5" color="text.secondary">
                                        لا : 40%
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{padding:2}} component="h3" variant="h4" color="red">
                                    آراء الطلبة
                                </Typography>
                                {Array(4)
                                    .fill(0)
                                    .map((_, i) => (
                                        <div>
                                            <Paper sx={{ paddingTop: 2, p: 2, display: 'flex', flexDirection: 'column' }}>

                                                <Typography key={i} component="h5" variant="h6" color="text.secondary">
                                                    رأي الطالب رأي الطالب رأي الطالب رأي الطالب
                                                    رأي الطالب رأي الطالب رأي الطالب رأي الطالب
                                                    رأي الطالب رأي الطالب رأي الطالب رأي الطالب
                                                    رأي الطالب رأي الطالب رأي الطالب رأي الطالب
                                                    رأي الطالب رأي الطالب رأي الطالب رأي الطالب
                                                    رأي الطالب رأي الطالب رأي الطالب رأي الطالب
                                                    رأي الطالب رأي الطالب رأي الطالب رأي الطالب
                                                    رأي الطالب رأي الطالب رأي الطالب رأي الطالب
                                                </Typography>
                                            </Paper>
                                            <Divider />
                                        </div>
                                    ))}

                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}