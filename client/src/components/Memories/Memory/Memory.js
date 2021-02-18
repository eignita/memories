import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { deleteMemory, likeMemory } from '../../../actions/memories'
import useStyles from './styles';

function Memory({memory, setCurrentId}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={memory.selectedFile} title={memory.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{ memory.name }</Typography>
                <Typography variant="body2">{ moment(memory.updatedAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {setCurrentId(memory._id)}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{ memory.tags.map(tag => `#${tag.trim()} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{memory.title}</Typography>
            <CardContent>                
                <Typography variant="body2" color="textSecondary" gutterBottom component="p">{ memory.message }</Typography>
            </CardContent>
            <CardActions className={classes.cardActions} >
                <Button size="small" color="primary" onClick={() => {dispatch(likeMemory(memory._id))}}>
                    <ThumbUpAltIcon fontSize="small" />&nbsp;{`Like ${memory.likeCount}`}
                </Button>
                <Button size="small" color="primary" onClick={() => {dispatch(deleteMemory(memory._id))}}>
                    <DeleteIcon fontSize="small" />{` Delete `}
                </Button>                
            </CardActions>            
        </Card>
    )
}

export default Memory
