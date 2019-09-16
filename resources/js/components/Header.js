import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderWrapper = styled.header `
    min-width: 100%;
    height: 60px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 10px 60px 10px 60px;

    nav {
        float: right;
        display: flex;

        .nav-link-edit, .nav-link-signout {
            text-decoration: none;
            color: #3B5998;
            font-weight: bold;
            font-size: 14px;
            text-transform: capitalize;
        }

        .nav-link-edit {
            padding-top: 10px;

            :hover {
                color: #000000;
            }
        }

        .nav-link-signout {
            border: 1px solid #3B5998;
            padding:10px 25px 10px 25px;
            border-radius: 4px;
            margin-left: 30px;

            :hover {
                background: #3b5998;
                border: none;
                color: #ffffff;
            }
        }
    }
`;

const Header = ({handleClick, ...otherProps}) => {
    return (
        <HeaderWrapper>
            <nav>
                <Link {...otherProps} className="nav-link-edit">edit profile</Link>
                <Link handleClick={handleClick} {...otherProps} className="nav-link-signout">sign out</Link>
            </nav>
        </HeaderWrapper>
    )
}

export default Header
