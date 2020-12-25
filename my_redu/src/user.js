import { Component } from 'react';

class User extends Component{
    render(){
      return(
         <div>
           <h1>hello : {this.props.username} </h1>
         </div>
      )
    }
  }

export default User;