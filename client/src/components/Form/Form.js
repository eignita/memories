import React, { useState, useEffect } from "react";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createMemory } from '../../actions/memories';
import useStyles from "./styles";

function Form() {
  const classes = useStyles();
  const [memoryData, setMemoryData] = useState({ title: '', message: '', creator: '', tags: '', selectedFile: ''});
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createMemory(memoryData));
  };
  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={ memoryData.creator } onChange={(e) => setMemoryData({...memoryData, creator: e.target.value})} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={ memoryData.title } onChange={(e) => setMemoryData({...memoryData, title: e.target.value})} />
        <TextField name="message" variant="outlined" label="Message" fullWidth value={ memoryData.message } onChange={(e) => setMemoryData({...memoryData, message: e.target.value})} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={ memoryData.tags } onChange={(e) => setMemoryData({...memoryData, tags: e.target.value})} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setMemoryData({...memoryData, selectedFile: base64})} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" fullWidth type="submit">Submit</Button>
        <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button>
      </form>
    </Paper>
  );
}

export default Form;
