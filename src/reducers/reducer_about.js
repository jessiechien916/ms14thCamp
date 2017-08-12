import {QUERY_ABOUT,EDIT_ABOUT} from '../action/index';

export default function(state = [],action){
  switch(action.type){
    case QUERY_ABOUT:
        return action.payload.data.infos;
    case EDIT_ABOUT:
        return action.payload.data.infos;
    }
  return state;
}
