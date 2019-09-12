import React from 'react';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TaskItem from './TaskItem';
function TaskList(props) {
  const { classes, tasks, status } = props;
  return (
    <Grid item md={4} key={tasks.id}>
      <Box component="h2" mt={5} mb={5}>
        <div>{status.label}</div>
        {tasks.map((task, index) => {
          return (
            <TaskItem task={task} status={status} />
          )
        })}
      </Box>
    </Grid>
  )
}


export default TaskList;
