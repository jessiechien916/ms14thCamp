import {QUERY_WORK,ADD_WORK,DEL_WORK,QUERY_POST} from '../action/index';


export default function(state = [],action){
  switch(action.type){
    case QUERY_WORK:
        return action.payload.data.collection;
    case ADD_WORK:
        return action.payload.data.collection;
    case DEL_WORK:
        return action.payload.data.collection;
    case QUERY_POST:
        return action.payload.data.collection;
    }
  return state;
}
