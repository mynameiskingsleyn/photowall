import React from 'react';
import Photo from './Photo';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
// anchor tag, href attribute.
//import Title from './Title';

//const title = "Photo Wall";

function Photowall(props) {
  let sortKey = 'id';
  let sortDir = 'desc';
  // sample image link ==> https://images.all-free-download.com/images/graphicwebp/swan_beauty_nature_264533.webp
  // https://fileinfo.com/img/ss/xl/jpg_44.png
  const posts = props.posts.sort((x,y) => {
    if(sortDir === 'asc') {
      return x[sortKey] - y[sortKey];
    }
    return y[sortKey] - x[sortKey];
  });
  return <div className="photo-wall">
           <Link className="add-link" to="/add-photo"
           >+</Link>
           <div className="photoGrid">
              { posts.map((post) => <Photo post={post} key={post.id} {...props}/>)}
            </div>
          </div>
}

Photowall.propTypes = {
  posts: propTypes.array.isRequired
}

export default Photowall;
