import React from 'react';
import { Typography, Link} from '@material-ui/core';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
        {/* <AppBar className={classes.appBar} position="static" color="inherit"> */}
        <Typography className={classes.footer} position="static" variant="body2" align="center">
        {'Copyright © '}{new Date().getFullYear()}{' '}<Link color="inherit" href="https://wow-memories.netlify.app/">Wow Memories</Link>{' from Dravit Kumar '}
        </Typography>
        {/* </AppBar> */}
        </div>
    )
}

export default Footer
