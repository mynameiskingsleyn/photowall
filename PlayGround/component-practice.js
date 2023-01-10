import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out trash', 'Clean the stove', 'Wash your hands'];
const tasks2 = ['Mow the lawn', 'Cut the grasses', 'climb some tree'];
const title1 = " What to do on sunday";
const title2 = " What to do on monday";

class List extends Component {
  render() {
    return <ol>
            {this.props.tasks.map((task, index) => <li key={index}> {task} </li>)}

          </ol>
  }
}

class Title extends Component {
  render() {
    return <h3> {this.props.title} </h3>
  }
}

class Main extends Component {
  render() {
    return  <div>
              <Title title={title1}/>
              <List tasks={tasks}/>
              <List tasks={tasks2}/>
            </div>
  }
}
ReactDOM.render(<Main/>, document.getElementById('root'));
