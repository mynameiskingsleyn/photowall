import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out trash', 'Clean the stove', 'Wash your hands'];

// const element = React.createElement('ol', null,
//   tasks.map((task,index) => React.createElement('li', {key:index}, task))
// );
//
// ReactDOM.render(element, document.getElementById('root'));
const element = <div>
<h3> Welcome </h3>
<ol>
  {tasks.map((task, index) => <li key={index}> {task} </li>)}

</ol>
</div>
//jss
ReactDOM.render(element, document.getElementById('root'));
