import React, { Component } from 'react';

//importing Components
import Task1 from './../components/task1.jsx'
import Task2 from './../components/task2.jsx'
import Task3 from './../components/task3.jsx'



export default class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Node Assginment</h1>

          <div className="Container">

              <div className="col1" >
                <Task1 />
              </div>

              <div className="col2">
                <Task2 />
              </div>

              <div className="col3" >
                <Task3 />
              </div>

        </div>

      </div>
    );
  }
}
