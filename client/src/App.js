import { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Link} from '@material-ui/core';
import memories from './images/memories.png';
import Memories from './components/Memories/Memories';
import Form from './components/Form/Form';
import useStyles from './styles';

import { useDispatch } from 'react-redux';
import { getMemories } from './actions/memories';
function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemories());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
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
      {/* <AppBar className={classes.appBar} position="static" color="inherit"> */}
        <Typography className={classes.footer} position="static" variant="body2" align="center">
        {'Copyright © '}{new Date().getFullYear()}{' '}<Link color="inherit" href="https://wow-memories.netlify.app/">Wow Memories</Link>{' from Dravit Kumar '}
        </Typography>
      {/* </AppBar> */}
    </Container>
  );
}

export default App;
