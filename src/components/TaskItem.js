import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { connect } from 'react-redux';
import * as actions from '../actions/index';


function TaskItem(props) {
  const { task, status } = props;
  function updateTask() {
    console.log(props.task);
    props.onUpdateTask(props.task)
  }
  function delTask() {
    props.onDelTask(task.id)

  }
  return (
    <Card key={task.id} >
      <CardContent>
        <Grid container justify="space-between">
          <Grid item md={8}>
            <Typography color="textPrimary" gutterBottom>
              {task.nameTask}
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography color="textPrimary" gutterBottom>
              {status.label}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Fab color="secondary" aria-label="edit" size="small" onClick={() => updateTask()}>
          <CheckCircleIcon />
        </Fab>
        <Fab color="primary" aria-label="delete" size="small" onClick={() => delTask()}>
          <DeleteIcon />
        </Fab>
      </CardActions>
    </Card>
  )
}

const mapDispatchToProps = {
  onDelTask: actions.delTask,
  onUpdateTask: actions.updateTask
}

export default connect(null, mapDispatchToProps)(TaskItem);
