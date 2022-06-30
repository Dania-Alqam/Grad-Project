import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import {styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import CourseCard from './courseCard';
import Container from '@mui/material/Container';
import { blueGrey } from '@mui/material/colors';
import MainCard from './MainCard';
import { Card } from '@mui/material';
import App from "../../components/Navbar/navbar";

const bgblue = blueGrey[50];

const CardWrapper = styled(MainCard)(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.primary.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -85,
        right: -95,
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.primary.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
        borderRadius: '50%',
        top: -125,
        right: -15,
    }
}));


const CourseViewer = () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    //add a respone from backend with the needed data and assign it to jsonCourse var (rename it)
    const jsonCourse =
        [

            {
                name: "بنية المعلومات",
                id: "comp242"
            },
            {
                name: "الخوارزميات",
                id: "comp336"
            },
            {
                name: "بنية المعلومات",
                id: "comp242"
            },
            {
                name: "الخوارزميات",
                id: "comp336"
            },
            {
                name: "الخوارزميات",
                id: "comp336"
            },
            {
                name: "بنية المعلومات",
                id: "comp242"
            },
            {
                name: "الخوارزميات",
                id: "comp336"
            },
            {
                name: "بنية المعلومات",
                id: "comp242"
            },
            {
                name: "الخوارزميات",
                id: "comp336"
            }
        ]

    return (
        <>
              {<App />}

            <Container disableGutters maxWidth="lg" component="main" sx={{
                pt: 8, pb: 6, bgcolor: bgblue, padding: 10, margin: 2, mt: 2, alignSelf: 'center', justifyContent: "center"
            }}>
                <Card sx={{ p: 2, mb: 3 }}>
                    <Typography sx={{ padding: 2 }} component="h2" variant="h3" color="primary.text">
                        المكتبة الإلكترونية
                    </Typography>
                    <Typography sx={{ padding: 1 }} component="h7" variant="h8" color="gray">
                        اختر التخصص والسنة الدراسية لاستعراض المساقات المقررة
                    </Typography>
                </Card>
                <Grid container>
                    <DepartmentSelect
                        sx={{ p: 2 }}
                    >
                    </DepartmentSelect>
                    <YearSelect sx={{ p: 2 }}></YearSelect>
                </Grid>

                <Grid container spacing={3} sx={{ m: 0.5 }}>
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            {jsonCourse.map((course) => (
                                <Grid item key={course} lg={4} md={6} sm={6} xs={12} >
                                    <CourseCard course={course} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

function DepartmentSelect() {
    const test = "test";

    const [department, setDepartment] = React.useState('');

    const handleChange = (event) => {
        setDepartment(event.target.value);
        console.log("hellooooooooooooooooooooooooooo ************************ (" + event.target.value + ")")
    };

    return (
        <Box sx={{ minWidth: 120, padding: 1 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-autowidth-label">التخصص</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={department}
                    label="Department"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>--اختر التخصص--</em>
                    </MenuItem>
                    <MenuItem value={"علم حاسوب"}>علم حاسوب</MenuItem>
                    <MenuItem value={"فاليو 2"}>علم حاسوب</MenuItem>
                    <MenuItem value={test}>علم حاسوب</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

function YearSelect() {
    const [department, setDepartment] = React.useState('');
    const handleChange = (event) => {
        setDepartment(event.target.value);
    };


    return (
        <Box sx={{ minWidth: 120, padding: 1 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-autowidth-label">السنة</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={department}
                    label="Department"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>--اختر التخصص--</em>
                    </MenuItem>
                    <MenuItem value={10}>سنة أولى</MenuItem>
                    <MenuItem value={21}>سنة ثانية</MenuItem>
                    <MenuItem value={22}>سنة ثالثة</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default CourseViewer;