import React from 'react';
import classes from './NavigationItem.module.css';
import {NavLink} from "react-router-dom";

const NavigationItem = (props) => {
    return (
        <li className={classes.item}>
            <NavLink to={props.link} className={navData => navData.isActive ? classes.active : classes.item}>{props.text}</NavLink>
        </li>
    )
}

export default NavigationItem;