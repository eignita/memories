import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { deleteMemory, likeMemory } from '../../../actions/memories'
import useStyles from './styles';

function Memory({memory, setCurrentId}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user);

    const Likes = () => {
      if (memory.likes.length > 0) {
        return memory.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
          ? (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{memory.likes.length > 2 ? `You and ${memory.likes.length - 1} others` : `${memory.likes.length} like${memory.likes.length > 1 ? 's' : ''}` }</>
          ) : (
            <><ThumbUpAltOutlined fontSize="small" />&nbsp;{memory.likes.length} {memory.likes.length === 1 ? 'Like' : 'Likes'}</>
          );
      }
  
      return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={memory.selectedFile} title={memory.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{ memory.name }</Typography>
                <Typography variant="body2">{ moment(memory.updatedAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
            {(user?.result?.googleId === memory?.creator || user?.result?._id === memory?.creator) && (
                <Button style={{color: 'white'}} size="small" onClick={() => {setCurrentId(memory._id)}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            )}
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{ memory.tags.map(tag => `#${tag.trim()} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{memory.title}</Typography>
            <CardContent>                
                <Typography variant="body2" color="textSecondary" gutterBottom component="p">{ memory.message }</Typography>
            </CardContent>
            <CardActions className={classes.cardActions} >
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => {dispatch(likeMemory(memory._id))}}>
                    <Likes />
                </Button>
                {(user?.result?.googleId === memory?.creator || user?.result?._id === memory?.creator) && (
                    <Button size="small" color="primary" onClick={() => {dispatch(deleteMemory(memory._id))}}>
                        <DeleteIcon fontSize="small" />{` Delete `}
                    </Button>   
                )}
             
            </CardActions>            
        </Card>
    )
}

export default Memory
