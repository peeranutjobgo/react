// import logo from './logo.svg';
import { Component } from 'react';
// import './App.css';
import Header from './header';
import Content from './Content';
import Footer from './Footer';

// function App() {
class App extends Component {

  // var mystyle = {
  //   fontSize :200,
  //   color:'red'
  // }
  
  constructor() {
    super();
    this.state={
      data:[],
      message:"unlike",
      type:""
    };
    this.changeMessage = this.changeMessage.bind(this);
    this.insertData = this.insertData.bind(this);
    this.mystyle = {
      fontSize: 200,
      color: 'red'
    };
  }
  onChange(event){
    this.setState({type:event.target.value})
  }
  changeMessage(){
    this.setState({message :"like"});
  }
  insertData(){
    var item ="React" ;
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({data:myArray});
  }
  render(){
    return (
      <div className="App">
        <div>
          <h1><a href ="#"> Header </a></h1>
          <h1><a href ="#"> Content  </a> </h1>
          <h1><a href ="#"> Footer  </a> </h1>
        </div>


        <Header />
        <Content title = "intro" name="jobgo " no="unknow  unknow unknow"  />
        <Footer />
        <h1> {this.state.message}</h1>
        <button onClick={this.changeMessage}>{this.state.message}</button>
        <h1>{this.state.data}</h1>
        <button onClick={this.insertData}>insert</button>
        <br></br>
        <h1>{this.state.data}</h1><br/>
        <input type="text" onChange={this.onChange.bind(this) } />
        <h1>{this.state.type}</h1>

        <h1 style = {mystyle}>react jobgo</h1>
        <h2> {50*50}</h2>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>  */}
      </div>
    );
  }
}
export default App;