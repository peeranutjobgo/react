import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {Router,Route,Link,browserHistory} from 'react-router'
//import createHistory from 'history/createBrowserHistory'
import {BrowserRouter , Route } from 'react-router-dom' 
import Header from './header';
import Content from './Content';
import Footer from './Footer';

ReactDOM.render(
  // <Router history={createHistory}>
  //   <Route path="/" component={App}/>
  //   <Route path="/header" component={Header}/>
  //   <Route path="/Coutent" component={Content}/>
  //   <Route path="/Coutent" component={Footer}/>
  // </Router>,document.getElementById('root')
  <BrowserRouter>
    <div>
      <Route path="/" component={App}/>
      <Route path="/header" component={Header}/>
      <Route path="/Coutent" component={Content}/>
      <Route path="/Coutent" component={Footer}/>
    </div>
  </BrowserRouter>


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
