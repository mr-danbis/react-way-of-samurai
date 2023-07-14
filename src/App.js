import React from 'react';
import Header from './components/Header/Header';
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

const   App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Sidebar sidebarData={props.appState.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile profilePage={props.appState.profilePage} dispatch={props.dispatch}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs messagesPage={props.appState.messagesPage} dispatch={props.dispatch}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;