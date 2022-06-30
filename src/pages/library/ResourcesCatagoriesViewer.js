import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import App from "../../components/Navbar/navbar";

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://images.unsplash.com/photo-1544640808-32ca72ac7f37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    title: 'الكتاب',
    width: '40%',
    to:'bookLib'
  },
  {
    url: 'https://blog.mostaql.com/wp-content/uploads/2021/04/%D8%A7%D9%84%D8%B9%D8%B1%D9%88%D8%B6-%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%8A%D9%85%D9%8A%D8%A9.jpg',
    title: 'العروض التقديمية',
    width: '20%',
    to: 'slideLib'
  },
  {
    url: 'https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'امتحانات سابقة',
    width: '40%',
    to: 'examsLib'

  },
  {
    url: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title: 'تسجيلات المحاضرات',
    width: '28%',
    to: 'lectureLib'
  },
  {
    url: 'https://images.unsplash.com/photo-1462642109801-4ac2971a3a51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80',
    title: 'ملخصات الطلاب',
    width: '44%',
    to: 'notesLib'
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'مشاريع سابقة',
    width: '28%',
    to: 'projectsLib'
  }
];


const ResourcesCatagoriesViewer = () => {

    return (
        <>
                    {<App />}

            <Container component="section" sx={{ mt: 8, mb: 4 }}>
                <Typography variant="h4" marked="center" align="center" component="h2">
                    المصادر الخاصة بالمساق موجودة داخل المصنفات التالية
                </Typography>
                <Divider/>
                <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
                    {images.map((image) => (
                        <ImageIconButton
                            key={image.title}
                            href={image.to}
                            style={{
                                width: image.width,
                            }}
                            
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center 40%',
                                    backgroundImage: `url(${image.url})`,
                                }}
                            />
                            <ImageBackdrop className="imageBackdrop" />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'common.white',
                                }}
                            >
                                <Typography
                                    component="h3"
                                    variant="h6"
                                    color="inherit"
                                    className="imageTitle"
                                >
                                    {image.title}
                                    <div className="imageMarked" />
                                </Typography>
                            </Box>
                        </ImageIconButton>
                    ))}
                </Box>
            </Container>
        </>
    );
};


export default ResourcesCatagoriesViewer;