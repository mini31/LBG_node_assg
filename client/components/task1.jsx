//importing react modules
import React, { Component } from 'react';

//importing Superagent
import request from 'superagent';

export default class Task1 extends Component{

  constructor(props){
    super(props);

    this.state={
      component:''
    }

  }

  componentDidMount(){
    request
       .get('/task1')
       .then(res => {
         console.log(res.text);
          var comp = (<center><span style={styles.answer}>{res.text}</span></center>);
          this.setState({component:comp});
       });
  }

  render(){
    return(
      <div className="task2Container">

        <div className="TextfieldContainer">
          <h2>Task 1</h2>
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
