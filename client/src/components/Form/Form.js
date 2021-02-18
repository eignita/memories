import React, { useState, useEffect } from "react";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createMemory, updateMemory } from '../../actions/memories';
import useStyles from "./styles";

function Form({currentId, setCurrentId}) {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const [memoryData, setMemoryData] = useState({title: '', message: '', tags: '', selectedFile: ''});
  const memory = useSelector(state => currentId ? state.memories.find(p => p._id === currentId): null);
  const dispatch = useDispatch();
  useEffect(()  =>  {
    if(memory) {
      setMemoryData(memory);
    }
  },[memory]);

  const handleSubmit = (e) => {
      e.preventDefault();
      if(currentId) {
          dispatch(updateMemory(currentId, {...memoryData, name: user?.result?.name}));          
      }
      else {
        dispatch(createMemory( {...memoryData, name: user?.result?.name}));
      }
      clear();
  };
  const clear = () => {
    setCurrentId(null);
    setMemoryData({ title: '', message: '', creator: '', tags: '', selectedFile: ''});
  };

  if(!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please sign in to create your memories and like other's memories. 
        </Typography>
      </Paper>
    )
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{ currentId ? `Editing ${memory.title}`: `Creating a Memory` }</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={ memoryData.title } onChange={(e) => setMemoryData({...memoryData, title: e.target.value})} />
        <TextField name="message" variant="outlined" label="Message" fullWidth value={ memoryData.message } onChange={(e) => setMemoryData({...memoryData, message: e.target.value})} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={ memoryData.tags } onChange={(e) => setMemoryData({...memoryData, tags: e.target.value.split(',')})} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setMemoryData({...memoryData, selectedFile: base64})} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" fullWidth type="submit">Submit</Button>
        <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button>
      </form>
    </Paper>
  );
}

export default Form;
