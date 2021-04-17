import React from "react";
import { Link } from 'react-router-dom';
import GAuth from './GAuth'

const Header = () => {

    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                StreamIt
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
                <GAuth />
            </div>
        </div>
    );
};

export default Header;