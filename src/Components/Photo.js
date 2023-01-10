import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';


function Photo(props) { //console.log(props);
  const post = props.post;
  const index = props.index;
  const comms = props.comments.filter((com) => {
    return com.post_id === post.id
  });
  //console.log(props);
  //console.log('post id is '+post.id);
  const commsCount = comms.length;
  return <figure className="figure"> 
            <Link to={`/single/${post.id}`}>
              <img src={post.imageLink} alt={post.description}  className="photo"/>
            </Link>
            
            <figcaption>
              <p> {post.description} </p>
            </figcaption>
            <div className="button-container">
              <button className="danger" onClick = {() => {
                props.startRemovingPost(post.id)
                props.history.push('');
              }}> Remove  </button>
              <Link className="button" to={`/single/${post.id}`} >
                <div className="comment-count">
                  <div className="speech-bubble"></div>
                  {commsCount}
                </div>
              </Link>
            </div>
        </figure>
}

// Photo.propTypes = {
//   post: propTypes.object.isRequired,
// }

export default Photo
