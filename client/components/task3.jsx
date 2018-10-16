//importing react modules
import React, { Component } from 'react';

//importing Superagent
import request from 'superagent';

export default class Task2 extends Component{

  constructor(props){
    super(props);

    this.state={
      value:'',
      component:''
    }

    //event handlers
    this.handleTextField1 = this.handleTextField1.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleTextField1(e){
    //storing the value
    this.setState({value:e.target.value});
  }

  handleSubmit(){
    request
       .get('/task3')
       .query({ value: this.state.value})
       .then(res => {
          var comp = (<center><span style={styles.answer}>Value : {res.text}</span></center>);
          this.setState({component:comp});
       });
  }

  render(){
    return(
      <div className="task2Container">

        <div className="TextfieldContainer">
          <h2>Task 3</h2>
          <input type="text" placeholder="enter a name" onChange={this.handleTextField1}/>
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
