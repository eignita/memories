import React, { useState } from 'react';
import { Container, Typography, Avatar, Paper, Button, Grid} from '@material-ui/core';
import { AUTH } from '../../constants/actionTypes';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Icon from './Icon';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import useStyles from './styles';
import { signup, signin } from '../../actions/auth';

const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "", };

const Auth = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState)
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignUp] = useState(false);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    }

    const switchMode = () => {
        setIsSignUp((isprevSignUp) => !isprevSignUp);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type: AUTH, data: { result, token }});
            history.push('/');

        } catch (error) {
            console.log(error);
        }

    }
    const googleFailure = (error) => {
        console.log(error);
        console.log('Google Sign In was unsuccessful. Try again later.')
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" value={formData.firstName} handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" value={formData.lastName} handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" value={formData.email} handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" value={formData.password} handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" value={formData.confirmPassword} handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" variant="contained" color="primary" fullWidth className={classes.submit}>
                        { isSignup ? 'Submit' : 'Sign In'}
                    </Button>
                    <GoogleLogin 
                        clientId="541925506831-gnhthmj2nd6mvo07afbaacoi76eall5u.apps.googleusercontent.com"
                        render={(renderprops) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderprops.onClick} disabled={renderprops.disabled} startIcon={<Icon />} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign In' : "Don't have an accont? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
