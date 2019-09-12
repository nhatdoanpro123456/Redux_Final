import * as types from '../constants/ActionTypes';

const uuidv1 = require('uuid/v1');

let rootState = {
  tasks: [
    {
      id: uuidv1(),
      nameTask: "Read Book",
      status: 0
    },
    {
      id: uuidv1(),
      nameTask: "Sleep",
      status: 0
    },
    {
      id: uuidv1(),
      nameTask: "Learn",
      status: 0
    },
    {
      id: uuidv1(),
      nameTask: "Play Game",
      status: 2
    },
  ]
};

const findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      console.log(task.id);
      result = index;
    }
  });
  return result;
}

export const allTasks = (state = rootState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      let newTask = {
        id: uuidv1(),
        nameTask: action.task,
        status: 0
      }
      let addTask = state.tasks;
      addTask.push(newTask)
      return { ...state }
    case types.DELETE_TASK:
      let delIndex = findIndex(state.tasks, action.id)
      console.log(delIndex);
      state.tasks.splice(delIndex, 1)
      return { ...state }
    case types.UPDATE_TASK:
      let updateIndex = findIndex(state.tasks, action.task.id)
      if (state.tasks[updateIndex].status < 2) {
        state.tasks[updateIndex].status++;
      }
      // else {
      //   state.tasks.splice(updateIndex,1)
      // }
      console.log(state.tasks[updateIndex].status);
      return { ...state }
    default: return { ...state }
  }
}
