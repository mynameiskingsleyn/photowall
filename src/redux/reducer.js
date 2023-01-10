import postData from '../data/posts';
import {combineReducers} from 'redux';

function comments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT': // if state is an object and post id is part of action.
      // Note that we will an object, having 
      /*
       if (!state[action.postId]) {
         return {...state, [action.postId]:[action.comment]};
       } else {
         return {...state, [action.postId]: [...state[action.postId], action.comment]}
       }


      */
      return [...state, action.comment];
      // ADD TO STATE..
    case 'LOAD_COMMENTS': 
       return action.comments
    default:
      return state;
  }
  
  return state;
}
function posts(state = postData, action) {
  switch(action.type) {
    case 'REMOVE_POST':
      const index = state.findIndex(obj => obj.id === action.index);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case 'ADD_POST':
      return [...state, action.post];
    case 'LOAD_POSTS':
      return action.posts

    default:
      return state;
  }

  return state
}

const rootReducer = combineReducers({posts, comments});

export default rootReducer;
