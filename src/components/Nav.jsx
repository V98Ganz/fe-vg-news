import React from 'react';
import { Link } from "@reach/router";

const Nav = (props) => {
    const { name } = props
    return (
        <nav>
            <Link className="nav-item" to="/" >VGNews</Link>
            <Link className="nav-item" to="/topics" >Topics</Link>
            <Link className="nav-user" to={`/user/${name}`} >{name}</Link>
        </nav>
    );
};

export default Nav;