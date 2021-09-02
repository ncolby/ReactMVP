import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import cors from 'cors'

// //This is my test to talk between front and backend
// import axios from 'axios';
// async function testing() {
//   await axios.post('http://localhost:5600/api/todos', {
//     "title": 'testing some shit boiiiiiiiiiii',
//     "importance": 'high'
//   })
//   const test = await axios.get('http://localhost:5600/api/todos')
//   const data = test.data
//   for(let i = 0; i < data.length; i++) {
//     console.log(data[i])
//   }
//   console.log('this is test', test.data)
// }
// // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
