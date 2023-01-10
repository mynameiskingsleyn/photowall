import postData from '../data/posts';
import {combineReducers} from 'redux';

const commentReducer = function comments(state = [], action) {


  return state;
}
const postsReducer = function posts(state = postData, action) {
  switch(action.type) {
    case 'REMOVE_POST':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    case 'ADD_POST':
      return [...state, action.post];

    default:
      return state;
  }

  return state
}


export default postsReducer;
