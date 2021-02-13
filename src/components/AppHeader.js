import React from 'react';

// External Imports
import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoMdFootball } from 'react-icons/io';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';

// Internal Imports
import '../assets/header.css';

const AppHeader = () => {
    return (
        <div className="header-wrapper">
            <div className="header-logo">
                <HiMenuAlt2 />
                <Link to="/"><IoMdFootball />SportsLive</Link>
            </div>
            <div className="header-side-menu">
                <ul>
                    <li><IoIosNotificationsOutline size="1.2em" /></li>
                    <li><BsSearch size="1em" /></li>
                    <li><BiUserCircle size="1.2em" /></li>
                </ul>
            </div>
        </div>
    );
}

export default AppHeader;
