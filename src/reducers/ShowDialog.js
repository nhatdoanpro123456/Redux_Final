import * as types from '../constants/ActionTypes';

let rootState = false;

export const showDialog = (state = rootState, action) => {
  switch (action.type) {
    case types.SHOW_DIALOG:
        state = !state
      return state
    default: return state
   }
}
