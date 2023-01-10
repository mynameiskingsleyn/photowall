import React from 'react';
import propTypes from 'prop-types';


function Photo(props) {
  const post = props.post;

  return <figure className="figure">
            <img src={post.imageLink} alt={post.description}  className="photo"/>
            <figcaption>
              <p> {post.description} </p>
            </figcaption>
            <div className="button-container">
              <button className="danger" onClick = {() => {
                props.onRemovePhoto(post)
              }}> Remove  </button>
            </div>
        </figure>
}

Photo.propTypes = {
  post: propTypes.object.isRequired,
  onRemovePhoto: propTypes.func.isRequired
}

export default Photo
