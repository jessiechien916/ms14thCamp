import {combineReducers} from 'redux';
import WorkReducer       from './reducer_work';
import AdminReducer      from './reducer_admin';
import AboutReducer      from './reducer_about';

const rootReducer = combineReducers({
    works:WorkReducer,
    admin:AdminReducer,
    about:AboutReducer
});

export default rootReducer;
