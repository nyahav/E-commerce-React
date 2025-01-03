import React from "react";
import './header.styles.scss';
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/084 crown.svg'
const Header = () =>
    <div className="header">
        <Link to="/">
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link className='option'to='/shop'>
                Shop
            </Link>
            <Link className='option'to='/shop'>
                Contact
            </Link>
        </div>
    </div>

export default Header;