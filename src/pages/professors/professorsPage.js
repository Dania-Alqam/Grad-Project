import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import EmailIcon from '@mui/icons-material/Email';
import Rating from '@mui/material/Rating';
import App from "../../components/Navbar/navbar";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();



  function BasicSelect() {
    const [department, setDepartment] = React.useState('');
  
    const handleChange = (event) => {
      setDepartment(event.target.value);
    };
  
  
    return (
      <Box sx={{ minWidth: 120, padding:1}}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">الدائرة</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={department}
            label="Department"
            onChange={handleChange}
          >
             <MenuItem value="">
              <em>--اختر الدائرة--</em>
            </MenuItem>
            <MenuItem value={10}>دائرة علم الحاسوب</MenuItem>
            <MenuItem value={21}>دائرة الهندسة الكهربائية وهندسة أنظمة الحاسوب</MenuItem>
            <MenuItem value={22}>دائرة الهندسة المدنية</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }

export default function Album() {
    document.body.style.textAlign="right";

    return (
        <ThemeProvider theme={theme}>
            <App /> 
            <CssBaseline />

            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm"> <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                دوائر الكليات
                            </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="outlined">الأعلى تقييماً</Button>
                            <BasicSelect/>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 5 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            اياد جابر
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div">
                                            iyad@bzu.edu <EmailIcon />
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div">
                                            المكتب : 258
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div">
                                          التقييم:  <Rating name="size-small" defaultValue={3.8} size="small" readOnly />
                                            
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button href="ratingSummary" size="small">عرض التقييم</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            
        </ThemeProvider>
    );
}