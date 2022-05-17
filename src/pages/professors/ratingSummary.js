import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { cyan } from '@mui/material/colors';
import Rating from '@mui/material/Rating';
import App from "../../components/Navbar/navbar";
document.body.style.direction="rtl";


// document.dir = "rtl";

const tiers = [
    {
        title: 'التقييم الكلي',
        rate: '4.9',
        content: 'إياد جابر',
        buttonText: 'قيّم المدرس',
        buttonVariant: 'contained',
        href:'rateprof'
    },

    {
        title: 'تقييم المدرس',
        content: [
            { good: 3 },
            { bad: 1 },
            { excelent: 4 }
        ],
        buttonText: 'المزيد من التفاصيل',
        buttonVariant: 'outlined',
        href:'detailedRate'
    
    },
];


export default function RatingSummary() {

     document.body.style.textAlign="right";

    const [value, setValue] = React.useState(2);
    return (
        
        <React.Fragment>
        
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <App /> 
            <CssBaseline />
            {/* Hero unit */}
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color={cyan[700]}
                    gutterBottom
                    sx={{
                        fontFamily: 'Roboto'
                    }}
                >
                    تقييم مختصر
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{ fontFamily: 'Roboto' }}>
                    قم بالضغط على زر المزيد من التفاصيل لعرض المزيد من المعلومات حول تقييم المدرس
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="xl" component="main">
                <Grid
                    container
                    spacing={5}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {tiers.map((tier) => (
                        // "تقييم المدرس" card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'التقييم الكلي' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    titleTypographyProps={{ align: 'center' }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    {tier.rate != null ?
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'baseline',
                                                mb: 2,
                                            }}
                                        >
                                            <Typography variant="h6" color="text.secondary">
                                                5/
                                            </Typography>
                                            <Typography component="h1" variant="h3" color="Red" >
                                                {tier.rate}
                                            </Typography>

                                        </Box>
                                        : <ul></ul>}
                                    {tier.title === 'التقييم الكلي' ?
                                        <Box>
                                            <ul>
                                                <Typography
                                                    component="h2"
                                                    variant="name1"
                                                    align="center"
                                                >
                                                    {tier.content}
                                                </Typography>
                                            </ul>
                                        </Box>
                                        : <Box>
                                            <Typography>
                                                ممتاز
                                            </Typography>
                                            <Rating
                                                name="read-only"
                                                value={4}
                                                readOnly
                                            />
                                            <Typography>
                                                جيد
                                            </Typography>
                                            <Rating
                                                name="read-only"
                                                value={3}
                                                readOnly
                                            />
                                            <Typography>
                                                ليس بالقدر الكافي
                                            </Typography>
                                            <Rating
                                                name="read-only"
                                                value={1.5}
                                                readOnly
                                            />
                                        </Box>}

                                </CardContent>
                                <CardActions>
                                    <Button  href={tier.href} fullWidth variant={tier.buttonVariant}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </React.Fragment >
    );
}

