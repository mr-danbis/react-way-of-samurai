import React from 'react';
import classes from './Navigation.module.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = (props) => {

    const NavigationElements = props.navigationData.map(navigationItem => {
        return <NavigationItem link={navigationItem.link} text={navigationItem.text}/>
    });

    return (
        <nav className={classes.navigation}>
            <ul>
                {NavigationElements}
            </ul>
        </nav>
    )
}

export default Navigation;