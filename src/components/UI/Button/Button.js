import React from 'react';
import {Link} from 'react-scroll';

const Button = (props) => {
    return(
        <li>
            <Link
                  activeClass={props.activeClassName}
                  to={props.target}
                  smooth={true}
                  offset={50}
                  duration={1000}
                  isDynamic={true}
            >
                {props.title}
            </Link>
        </li>
    )
};

export default Button;