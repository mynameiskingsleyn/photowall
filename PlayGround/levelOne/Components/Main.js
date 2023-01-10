import React, {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom'

// const mainTitle = "Photowall";
// const addTitle = "Add Photo";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      screen: 'photos' //photos, addPhotos
    }
    this.removePhoto = this.removePhoto.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  navigate() {
    this.setState({
      screen: 'addPhotos'
    });
  }
  removePhoto(postRemoved) {
    if (postRemoved) {
      console.log(postRemoved.description);
    }
    this.setState((state) => ( {
        posts: state.posts.filter((post) => post !== postRemoved)
      })
    );

  }
  addPhoto(postSubmitted)
  {
    var length = this.state.posts.length;

    if (postSubmitted) {
      let id = 0;
      if (length) {
        const last = this.state.posts[this.state.posts.length - 1];
        id = Number(last.id) + 1;
      }
      // sample image link ==> https://images.all-free-download.com/images/graphicwebp/swan_beauty_nature_264533.webp
      if (!postSubmitted.id) {
        postSubmitted.id = id;
      }

      this.setState((state) => ( {
        posts: state.posts.concat(postSubmitted)
      }));
    }
  }

  componentDidMount() {
    const data = SimulateFetchFromDB();
    this.setState({
      posts: data
    });
  }

  render() { console.log(this.state.posts);
    return  (<div className="main">
              <Route exact path = "/" render={() => (
                <div>
                    <Title title={'Photowall'}/>
                    <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto}
                    onNavigate={this.navigate}/>
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

function SimulateFetchFromDB() {
  return [{
   id: 0,
   description: "beautiful landscape",
   imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
   "3919321_1443393332_n.jpg"
 },
 {
   id: 1,
   description: "Aliens???",
   imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
 },
 {
   id: 2,
   description: "On a vacation!",
   imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
 }];
}

export default Main
