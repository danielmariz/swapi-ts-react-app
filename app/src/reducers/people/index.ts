import { Reducer, combineReducers } from 'redux';
import list from './list';
import isLoading from './isLoading';

export default combineReducers({
    list,
    isLoading,
});
