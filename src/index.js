import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state, {addPost, changeProfileMessage, changeDialogsMessage, subscribe} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost} changeProfileMessage={changeProfileMessage} changeDialogsMessage={changeDialogsMessage}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
