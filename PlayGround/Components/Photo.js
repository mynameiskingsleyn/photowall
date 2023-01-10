import React, {Component} from 'react';

class Photo extends Component
{
  render() {
    const post = this.props.post;
    return <figure className="figure">
              <img src={post.imageLink} alt={post.description}  className="photo"/>
              <figcaption>
                <p> {post.description} </p>
              </figcaption>
              <div className="button-container">
                <button className="danger"> Remove  </button>
              </div>
          </figure>
  }
}

export default Photo
