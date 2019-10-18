import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import SupAdSVG1 from '../../assets/svg/SupADSVG1';
import pic1 from '../../assets/img/pic1.jpg';
import { connect } from 'react-redux';


const SideBarWrapper = styled.nav `
    width: 250px;
    height: 100%;
    background: #ffffff;
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);
    position: relative;

    svg {
        width: 100%;
        transform: translateY(-30px);
    }

    .responsive-sidebar {
        width: 100%;
        height: 200px;
        background: #2B5680;
        position: absolute;
        display: none
    }

    .profile-content {
        position: absolute;
        width: 100%;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;

        img {
            width: 130px;
            height: 130px;
            border-radius: 50%;
        }

        p, h4 {
            color: #ffffff;
            text-transform: capitalize
        }

        p {
            margin: 10px;
        }

    }

    section.mini-nav {
        position: relative;
        margin-top: -20px;

        a {
            display: block;
            margin-bottom: 20px;
            text-decoration: none;
            text-transform: capitalize;
            text-align: left;
            padding-left: 15px;
            font-weight: bold;
            color: #2B5680;
            font-weight: bold;
            font-size: 14px;

            i {
                transform: translateY(5px);
                margin-right: 5px;
            }
        }

        .active {
            background: rgba(196, 196, 196, 0.2);
            color: #3B5998;
            padding: 15px;
            border-left: 5px solid  #2B5680;
        }

    }

    @media (max-width: 1000px) {
        height: 125%;
        
    }

    @media (max-width: 700px) {
        width: 150px;
        height: 125%;

        svg {
            display: none;
        }

        .responsive-sidebar {
            display: block;
        }

        .profile-content {

            img {
                width: 80px;
                height: 80px;
            }

            p, h4 {
                font-size: 12px
            }
        }

        section.mini-nav {
            top: 200px;
            margin-top: 40px;

            a {
                font-size: 11px;

                i {
                    transform: translateY(5px);
                    margin-right: 2px;
                }
            }
        }
    }
`;

const SideBar = ({user}) => {
    // add active links to navbar based on url
    const urlCheck = location.href;
    const path1 = '/superadmin';
    const path2 = '/superadmin/edit';
    const path3 = '/superadmin/employees';
    const path4 = '/superadmin/employees/create';
    const path5 = '/superadmin/employees/edit';
    const path6 = '/superadmin/employees/salary';
    const path7 = '/superadmin/employees/message';
    
    console.log(user.Avatar)
    return (
        <SideBarWrapper className="nav-hgt">
           <SupAdSVG1 /> 
           <div className="responsive-sidebar"></div>
           <div className="profile-content">
                <img src={user.Avatar} alt="profile photo"/>
                <p>{`${user.Firstname}  ${user.Surname}`}</p>
                <h4>{user.Title}</h4>
           </div>
           <section className="mini-nav">
                <NavLink 
                    to={path1} 
                    activeClassName = {
                        urlCheck.endsWith(path1)  || urlCheck.endsWith(path2)
                    ? 'active' : null}
                >
                  <i className="material-icons">dashboard</i>  dashboard
                </NavLink>
                <NavLink
                    to={path3} 
                    activeClassName = {
                        urlCheck.endsWith(path3) || urlCheck.endsWith(path4) || urlCheck.endsWith(path5)
                    ? 'active' : null}
                >
                  <i className="material-icons">group</i>  employees
                </NavLink>
                <NavLink
                    to={path6} 
                    activeClassName = {
                        urlCheck.endsWith(path6) 
                    ? 'active' : null}
                >
                  <i className="material-icons">account_balance</i>  salary breakdown
                </NavLink>
                <NavLink
                    to={path7} 
                    activeClassName = {
                        urlCheck.endsWith(path7) 
                    ? 'active' : null}
                >
                  <i className="material-icons">message</i>  messaging
                </NavLink>
           </section>
        </SideBarWrapper>
    )
};

const MapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(MapStateToProps)(SideBar);
