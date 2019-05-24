import React from 'react';
import './Header.scss';
import Button from "../UI/Button/Button";

const Header = () => {
  return(
      <header className="header">
          <h3>Welcome</h3>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
          </p>
          <ul>
              <Button title="CONTACT US" target="footer"/>
              <Button title="VIEW PORTFOLIO" target=".portfolio"/>
          </ul>
      </header>
  )
};

export default Header;