import React from 'react';
import { useSelector } from 'react-redux';
import Memory from './Memory/Memory';
import useStyles from './styles';

function Memories() {
    const classes = useStyles();
    const memories = useSelector(state => state.memories);
    console.log(memories);
    return (
        <>
            <h1>MEMORIES</h1>
            <Memory />
            <Memory />
        </>
    )
}

export default Memories
