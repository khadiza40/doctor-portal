import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking.js';

const bookings = [
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.55 AM - 12.33 PM0',
        space: 5
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.55 AM - 12.33 PM0',
        space: 5
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.55 AM - 12.33 PM0',
        space: 5
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.55 AM - 12.33 PM0',
        space: 5
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.55 AM - 12.33 PM0',
        space: 5
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.55 AM - 12.33 PM0',
        space: 5
    }
]

const AvailableAppointment = ({ date }) => {

    return (
        <Container>
            <Typography variant="h5" sx={{color:'warning.main', fontWeight:600, p:2, mb:4,my:4}} gutterBottom component="div">
                  All available appointment {date.toDateString()}  
                </Typography>
           
            
            <Grid container spacing={2}>
               {
                   bookings.map (booking => <Booking
                    key ={booking.id}
                    booking ={booking}
                    date={date}
                   
                   ></Booking>)
               }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;