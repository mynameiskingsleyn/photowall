import {database} from '../database/config';

export function startAddingPost(post) {
  return (dispatch) => {
     return database.ref('posts').update({[post.id]: post}).then(() => {
        dispatch(addPost(post))
     }).catch( error => {
        console.log(error);
     })
  }
}

function removeComments(updates) {
  return database.ref().update(updates);
}

function removePostComments(post_id) {
  return database.ref('comments').once('value').then((snapshot) => {
    let comments = [];
    snapshot.forEach((childSnapshot) => {
      comments.push(childSnapshot.val())
    })
    // filter coomments
    const postComments = comments.filter((comment) => {
      return comment.post_id === post_id
    })
    //return comments;
    let updates = {};
    postComments.forEach((comment) => {
      updates[`comments/${comment.id}`] = null
    })
    removeComments(updates).then().catch(err =>  console.log(err));
  }).catch((error) => {
    console.log(error)
  })
}

export function startAddingComment(comment) {
  return (dispatch) => { // if comments in post ==>  return database.ref('comments/'+postId).push(comment)
    return database.ref('comments').update({[comment.id]: comment}).then(() => {
      dispatch(addComment(comment))
    }).catch( err => {
      console.log(err)
    })
  }
}
export function startRemovingPost(id) {
  return (dispatch) => {
    removePostComments(id);
    return database.ref(`posts/${id}`).remove().then(() => {
      dispatch(removePost(id))
    })
  }
}

export function startLoadingPost() { //console.log('starting loading post has been called!!');
  return(dispatch) => {
    return database.ref('posts').once('value').then((snapshot) => {
      let posts = []
      snapshot.forEach((childSnapshot) => {
        posts.push(childSnapshot.val())
      })
      dispatch(loadPosts(posts))
    }).catch((error)=> {
      console.log(error)
    })
  }
}

export function startLoadingComments() {
  return(dispatch) => {
    return database.ref('comments').once('value').then((snapshot) => {
      let comments = [];
      snapshot.forEach((childSnapshot) => {
        comments.push(childSnapshot.val())
      })
      dispatch(loadComments(comments))
    }).catch((error) => {
      console.log(error)
    })
  }
}

// remove post
export function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index: index
  }
}

// adding post

export function addPost(post) {
  return {
    type: 'ADD_POST',
    //post: post
    post
  }
}

export function addComment(comment) {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}

export function loadPosts(posts) {
  return {
    type: 'LOAD_POSTS',
    posts
  }
}

export function loadComments(comments) {
  return {
    type: 'LOAD_COMMENTS',
    comments
  }
}
