import React from 'react';
//import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: ' Fluoride treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quisquam     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquid cum itaque expedita molestias ut tenetur nulla suscipit corporis dolorem.?'  
        ,
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quisqua     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquid cum itaque expedita molestias ut tenetur nulla suscipit corporis dolorem.m?' 
        ,
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quisqua     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquid cum itaque expedita molestias ut tenetur nulla suscipit corporis dolorem.m?' 
        ,
        img: whitening
    }
]

const Services = () => {



    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container >


            <Typography variant="h5" component="div" sx={{fontWeight:600, color:'warning.main',m:4}}>
         Our Services
        </Typography>
            <Typography variant="h4" component="div" sx={{fontWeight:700,m:5}}>
         Services We Provide
        </Typography>



                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service

                            key={service.name}
                            //prop
                            service={service}

                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;