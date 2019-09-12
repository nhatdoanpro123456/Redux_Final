import {combineReducers} from 'redux';
import {showDialog} from './ShowDialog';
import {allTasks} from './Tasks';

const allReducers = combineReducers({
    showDialog,
    allTasks
});
export default allReducers;