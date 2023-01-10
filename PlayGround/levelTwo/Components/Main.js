import React, {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
import {removePost} from '../redux/actions';

// const mainTitle = "Photowall";
// const addTitle = "Add Photo";

class Main extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
    //this.props.dispatch(removePost(1));
    //this.props.removePost(1);
  }

  removePhoto(postRemoved) {
    // if (postRemoved) {
    //   console.log(postRemoved.description);
    // }
    // this.setState((state) => ( {
    //     posts: state.posts.filter((post) => post !== postRemoved)
    //   })
    // );

  }
  addPhoto(postSubmitted)
  {
    // var length = this.state.posts.length;
    //
    // if (postSubmitted) {
    //   let id = 0;
    //   if (length) {
    //     const last = this.state.posts[this.state.posts.length - 1];
    //     id = Number(last.id) + 1;
    //   }
    //   //sample image link ==> https://images.all-free-download.com/images/graphicwebp/swan_beauty_nature_264533.webp
    //   if (!postSubmitted.id) {
    //     postSubmitted.id = id;
    //   }
    //
    //   this.setState((state) => ( {
    //     posts: state.posts.concat(postSubmitted)
    //   }));
    // }
  }

  render() { console.log(this.props);
    return  (<div className="main">
              <Route exact path = "/" render={() => (
                <div>
                    <Title title={'Photowall'}/>
                    <Photowall {...this.props}
                    />
                </div>
              )}/>

              {/*<Route path = "/add-photo" component = {AddPhoto} /> */}
              <Route path = "/add-photo" render={({history}) => (
                  <AddPhoto onAddPhoto={(addedPost) => {
                    this.addPhoto(addedPost);
                    history.push("/");
                  } }/>
              )} />
            </div>
          )
  }
}

export default Main
