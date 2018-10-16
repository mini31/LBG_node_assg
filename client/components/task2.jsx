//importing react modules
import React, { Component } from 'react';

//importing Superagent
import request from 'superagent';

export default class Task2 extends Component{

  constructor(props){
    super(props);

    this.state={
      value1:0,
      value2:0,
      component:''
    }

    //event handlers
    this.handleTextField1 = this.handleTextField1.bind(this);
    this.handleTextField2 = this.handleTextField2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleTextField1(e){
    //storing the value
    this.setState({value1:e.target.value});
  }

  handleTextField2(e){
    //storing the value
    this.setState({value2:e.target.value});
  }

  handleSubmit(){
    request
       .get('/task2')
       .query({ value1: this.state.value1, value2: this.state.value2 })
       .then(res => {
          var comp = (<center><span style={styles.answer}>Ans : {res.text}</span></center>);
          this.setState({component:comp});
       });
  }

  render(){
    return(
      <div className="task2Container">

        <div className="TextfieldContainer">
          <h2>Task 2</h2>
          <input type="text" placeholder="enter number 1" onChange={this.handleTextField1}/>
          <input type="text" placeholder="enter number 2" onChange={this.handleTextField2}/>
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
          {this.state.component}
        </div>

      </div>
    );
  }
}

const styles = {
  answer:{
    color:'white',
  }
}
