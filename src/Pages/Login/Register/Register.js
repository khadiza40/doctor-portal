import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Register = () => {


    const [loginData, setLoginData] = useState([]);

    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

        //console.log(field, value);

        e.preventDefault();
    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert("Your Password did not matched! ");
            return
        }
        


        e.preventDefault();
    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            variant="standard"
                            onChange={handleOnChange}


                        /> <br />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            type="password"
                            variant="standard"
                            onChange={handleOnChange}

                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Re Enter Your Password"
                            name="password2"
                            type="password"
                            variant="standard"
                            onChange={handleOnChange}

                        />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" >Register</Button>

                        <NavLink to="/login" style={{ textDecoration: 'none' }}>
                            <Button variant="text">Already Registered? Please LogIN</Button>
                        </NavLink>


                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />

                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;