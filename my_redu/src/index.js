import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers,applyMiddleware} from "redux";
import {Provider} from "react-redux";

const initalState={
  result:15000,
  value:[]
}
const Employee_Reducer = (state =initalState,action) => {
  switch (action.type){
    case "ADD":
        state = {
            // result:state.result ,
            // value: state.value
            ...state,
            result:state.result += action.payload,
            value:[...state.value,action.payload]
        }
      break;
    case "SUBTRACT":
        
      break;
    default:
  }
  return state;
}

const user_Reducer = (state={name:"kong",age: 15},action) =>{
  switch (action.type){
    case "setName":
        state = {
            ...state,
            name:action.payload
        }
      break;
    case "setAge":
        state = {
              ...state,
            age:action.payload
    }
            
      break;
    default:
  }
  return state;
}

const mylogger=(store)=>(next)=>(action)=>{
  console.log("log Action",action);
  next(action);
}

const store = createStore(combineReducers({emp:Employee_Reducer,user:user_Reducer}),{},applyMiddleware(mylogger));
store.subscribe(()=>{
  console.log("update Store",store.getState());
})
ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
       <App />
    {/* </React.StrictMode> */}
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// store.dispatch({
//   type:"ADD",
//   payload: 15000
// });

// store.dispatch({
//   type:"setName",
//   payload:"jobgo"
// })

// store.dispatch({
//   type: "setAge",
//   payload:"22"
// })
// // store.dispatch({
// //   type:"ADD",
// //   payload: 15000
// // });