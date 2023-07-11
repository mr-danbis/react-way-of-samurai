import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {addPost, changeProfileMessage, changeDialogsMessage} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
      <React.StrictMode>
        <App appState={state} addPost={addPost} changeProfileMessage={changeProfileMessage} changeDialogsMessage={changeDialogsMessage}/>
      </React.StrictMode>
    );
}