import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    componentDidMount() {
        //this.props.dispatch(removePost(1));
        //this.props.removePost(1);
        //console.log(this.props);
        //this.props.startLoadingPost();
    }
    render() {
        const {match, posts, comments} = this.props;
        const id = Number(match.params.id);
        const post = posts.find((post)=> post.id === id);
        const comms = this.props.comments;
        if (this.props.loading === true) {
            return <div className="loader"> ...loading </div>
        } else if ( post) {
            return <div className="single-photo">
                    <Photo post={post} {...this.props} />
                    <Comments startAddingComment={this.props.startAddingComment} post_id={id} comments={comms} />
                  </div>
        } else {
            return <h1>... no post found </h1>
        }

        
    }
}

export default Single;