import React from 'react';
import './NavBar.scss';
import logo from '../../img/Logo_DM.svg';
import Button from "../UI/Button/Button";


const NavBar = () => {
    let headerMenu = [
        {
            title: "Services",
            activeClassName: "active",
            target: "services"
        },
        {
            title: "Portfolio",
            activeClassName: "active",
            target: "portfolio"
        },
        {
            title: "Contact Us",
            activeClassName: "active",
            target: "footer"
        },
    ];

    return(
        <nav className="navBar">
            <div className="nav_left_section">
                <img src={logo} alt="DreaMi_logo"/>
            </div>
            <div className="nav_right_section">
                <ul>
                    {
                        headerMenu.map((item) => (
                            <Button key={item.title} title={item.title} target={item.target} activeClassName={item.activeClassName}/>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;