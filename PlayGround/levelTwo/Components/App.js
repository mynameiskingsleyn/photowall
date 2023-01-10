import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import { removePost, addPost} from '../redux/actions';
import * as actions from '../redux/actions';
import { withRouter } from 'react-router';

function mapStatesToProps(state) {
  return {
    posts: state
  }
}
function mapDispatchToProps(dispatch) {
  //return bindActionCreators({removePost, addPost}, dispatch);
  return bindActionCreators(actions, dispatch);
}
//const App = connect(mapStatesToProps)(Main);
// const App = connect(mapStatesToProps, mapDispatchToProps)(Main);
const App = withRouter(connect(mapStatesToProps, mapDispatchToProps)(Main));

export default App
