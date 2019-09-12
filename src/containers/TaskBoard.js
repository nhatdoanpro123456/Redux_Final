import React from 'react';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {connect} from 'react-redux';
import { STATUSES } from '../constants';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import * as actions from '../actions/index'
// import TaskList from '../components/TaskList';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    button: {
      marginTop: "50px",
    }
  }),
);

function TaskBoard(props) {
  const classes = useStyles();
// const tasks = [
//   {
//     id: 1,
//     nameTask: "Read Book",
//     status: 0
//   },
//   {
//     id: 2,
//     nameTask: "Sleep",
//     status: 1
//   },
//   {
//     id: 1,
//     nameTask: "Learn",
//     status: 2
//   },
//   {
//     id: 1,
//     nameTask: "Play Game",
//     status: 2
//   },
// ]
  function showTaskBoard() {
    const tasks = props.getTasks.tasks;
    console.log(tasks);
    let result = null;
    result = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFilter = tasks.filter(task => task.status === status.value);
          return (
            <TaskList tasks={taskFilter} status = {status}/>
          )
        })}

      </Grid>

    )
    return result;
  }

  function showForm() {
    let result = props.showForm
    return result;
  }
  function dialogOn() {
    return (
      <TaskForm open = {props.dialogOn} onClose={showForm()}/>
    )
  }
  console.log(props.dialogOn);
  
  return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Button className={classes.button} variant="contained" color="primary" onClick={showForm()} >
          <AddIcon /> Add new task
         </Button>
        {showTaskBoard()}
        {dialogOn()}
      </main>
  );
}

const mapStateToProps = function(state) {
  return {
    dialogOn: state.showDialog,
    getTasks: state.allTasks
  }
}

const mapDispatchToProps = {
   showForm: actions.showDialog,
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskBoard);
