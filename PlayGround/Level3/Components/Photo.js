import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';


function Photo(props) {
  const post = props.post;

  return <figure className="figure"> 
            <Link to={`single/${post.id}`}>
              <img src={post.imageLink} alt={post.description}  className="photo"/>
            </Link>
            
            <figcaption>
              <p> {post.description} </p>
            </figcaption>
            <div className="button-container">
              <button className="danger" onClick = {() => {
                props.removePost(post.id)
              }}> Remove  </button>
            </div>
        </figure>
}

Photo.propTypes = {
  post: propTypes.object.isRequired,
}

export default Photo
