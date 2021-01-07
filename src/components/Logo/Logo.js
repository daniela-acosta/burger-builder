import React from 'react';
import classes from './Logo.css';
import burgerLogo from "../../assets/images/burger-logo.png";

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurgerLogo"/>
    </div>
);


export default logo;