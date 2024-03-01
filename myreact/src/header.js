import { Component } from 'react';

class Header extends Component{
    constructor(){
        super();
        this.state={
            name:"jobgo",
            count:0
        };
    }
    render(){
        // setTimeout(() => {
        //     this.setState({name:"who!!!!!!"});}
        //     ,1000);
        // setInterval(() => {
        //     this.setState({count: this.state.count +1 });}
        // ,500);   
      return(
         <div>
           <h1>jobgogo</h1>
           <h2>{this.state.name}</h2>
           <h2>{this.state.count}</h2>
         </div>
      );
    }
  }

 export default Header; 
  