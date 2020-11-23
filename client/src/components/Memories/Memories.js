import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Memory from './Memory/Memory';
import useStyles from './styles';

function Memories() {
    const classes = useStyles();
    const memories = useSelector(state => state.memories);
    console.log(memories);
    return (
        !memories.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    memories.map(memory => (
                        <Grid item key={memory._id} xs={12} sm={6}>
                            <Memory memory={memory} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Memories
