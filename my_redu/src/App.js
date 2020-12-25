//import logo from './logo.svg';
// import './App.css';
import { connect } from "react-redux";
import User from "./user.js"

function App() {
  return (
    <div className="App">

      <User username={this.prop.user.name} />
    </div>
  );
}
const mapStatetoProp=(state)=>{
    return {
      user:state.user,
      emp:state.emp
    };
}
export default connect(mapStatetoProp)(App);
