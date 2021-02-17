import  { useState, useEffect } from 'react';
import { Container, Grow, Grid, Link} from '@material-ui/core';
import Memories from '../Memories/Memories';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { getMemories } from '../../actions/memories';
import useStyles from './styles';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getMemories());
    }, [currentId, dispatch]);

    return (
        <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={8}>
              <Memories setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={ currentId } setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}

export default Home
