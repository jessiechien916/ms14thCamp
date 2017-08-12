import {IS_LOGIN} from '../action/index';

export default function(state = [],action){
  switch(action.type){
    case IS_LOGIN:
        return action.payload.data;
    }
  return state;
}
