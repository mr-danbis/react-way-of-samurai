import React from 'react';
import classes from './Sidebar.module.css';
import Navigation from "./Navigation/Navigation";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    return (
        <div className={classes.sidebar}>
            <Navigation navigationData={props.sidebarData.navigation}/>
            <Friends friendsData={props.sidebarData.friends}/>
        </div>
    );
}

export default Sidebar;