import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TaskItem from './TaskItem';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
function TaskList(props) {
  const { classes, tasks, status } = props;
  return (
    <Grid item md={4} key={tasks.id}>
      <Box component="h2" mt={5} mb={5}>
        <div>{status.label}</div>
        {tasks.map((task, index) => {
          return (
            <TaskItem task = {task} status = {status}/>
          )
        })}
      </Box>
    </Grid>
  )
}


export default TaskList;
