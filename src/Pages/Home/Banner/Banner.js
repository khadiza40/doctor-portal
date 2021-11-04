import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Typography, Button, Container } from '@mui/material';



const bannerBg = {
    background: `url(${bg})`


}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450

}


const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }} style={bannerBg}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} style={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{my:3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam asperiores maiores perspiciatis impedit porro cupiditate labore voluptatem similique laboriosam magnam!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}
                        >Get Appointment</Button>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} style={{ verticalCenter }}>
                    <img src={chair} alt="" style={{ width: '350px', marginTop: '100px' }}
                    />

                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;