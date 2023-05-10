import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DialogsData = [
    {id: 1, name: 'Даник'},
    {id: 2, name: 'Софа'},
    {id: 3, name: 'Паша'},
    {id: 4, name: 'Маша'},
];

const MessagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'My name is Daniel'},
];

const postsData = [
    {id: 1, message: 'Hi! How are you?', likesCount: 5, img:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {id: 2, message: 'Hi! Hi!', likesCount: 10, img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {id: 3, message: 'Hi! How are you?', likesCount: 15, img:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    {id: 4, message: 'Hi! Hi!', likesCount: 20, img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dataDialogs={DialogsData} dataMessages={MessagesData} dataPosts={postsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
