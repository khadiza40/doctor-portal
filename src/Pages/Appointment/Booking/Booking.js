import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);


    return (

        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>

                    <Typography variant="h5" sx={{ color: 'info.main', fontWeight: 600 }} gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'success.main' }} gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'error.main' }} gutterBottom display="block">
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button variant="contained" onClick={handleBookingOpen} >BOOK APPOINTMENT</Button>

                </Paper>

            </Grid>
            <BookingModal
                 date={date}
                booking ={booking}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
            >

            </BookingModal>

        </>

    );
};

export default Booking;