import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App appState={state}
                 addPost={store.addPost.bind(store)}
                 changeProfileMessage={store.changeProfileMessage.bind(store)}
                 changeDialogsMessage={store.changeDialogsMessage.bind(store)}
            />
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
