import React, {Component} from 'react';
import List from './List';
import Title from './Title';

const tasks = ['Take out trash', 'Clean the stove', 'Wash your hands'];
const tasks2 = ['Mow the lawn', 'Cut the grasses', 'climb some tree'];
const title1 = " What to do on sunday";
const title2 = " What to do on monday";

class Main extends Component {

  render() {
    return  <div>
              <Title title={title1}/>
              <List tasks={tasks}/>
              <List tasks={tasks2}/>
            </div>
  }
}

export default Main
