import React from 'react';
import Photo from './Photo';
import propTypes from 'prop-types';
// anchor tag, href attribute.

function Photowall(props) {
  return <div className="photo-wall">
           <button className="add-icon"
           onClick={props.onNavigate}>+</button>
           <div className="photoGrid">
              { props.posts.map((post) => <Photo post={post} key={post.id}
              onRemovePhoto={props.onRemovePhoto} />)}
            </div>
          </div>
}

Photowall.propTypes = {
  posts: propTypes.array.isRequired,
  onRemovePhoto: propTypes.func.isRequired
}

export default Photowall;
