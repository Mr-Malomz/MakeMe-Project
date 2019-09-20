import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import RecepSVG2 from '../../assets/svg/RecepSVG2';
import pic1 from '../../assets/img/pic1.jpg';


const SideBarWrapper = styled.nav `
    width: 250px;
    height: 100%;
    background: #3B5998;
    position: relative;

    svg {
        width: 100%;
    }

    .responsive-sidebar {
        width: 100%;
        height: 200px;
        background: #DBE5FF;
        opacity: 0.5;
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
        margin-top: 40px;

        a {
            display: block;
            margin-bottom: 20px;
            text-decoration: none;
            text-transform: capitalize;
            text-align: left;
            padding-left: 15px;
            font-weight: bold;
            color: #ffffff;
            font-weight: 12px;

            i {
                transform: translateY(5px);
                margin-right: 5px;
            }
        }

        .active {
            background: #DBE5FF;
            color: #3B5998;
            padding: 15px;
            border-left: 5px solid  #022547;
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

const SideBar = () => {
    // add active links to navbar based on url
    const urlCheck = location.href
    const path1 = '/reception';
    const path2 = '/reception/createcustomer';
    const path3 = '/reception/results';
    const path4 = '/reception/createjob';
    const path5 = '/reception/payment';
    
    return (
        <SideBarWrapper>
           <RecepSVG2 /> 
           <div className="responsive-sidebar"></div>
           <div className="profile-content">
                <img src={pic1} alt="profile photo"/>
                <p>joy ayodeji</p>
                <h4>receptionist</h4>
           </div>
           <section className="mini-nav">
                <NavLink 
                    to={path1} 
                    activeClassName = {
                        urlCheck.endsWith(path1) || urlCheck.endsWith(path3) || urlCheck.endsWith(path4) ||
                        urlCheck.endsWith(path5)
                    ? 'active' : null}
                >
                  <i className="material-icons">assignment</i>  completed job
                </NavLink>
                <NavLink
                    to={path2} 
                    activeClassName={urlCheck.endsWith(path2) ? 'active' : null}
                >
                  <i className="material-icons">person_add</i>  create customer
                </NavLink>
           </section>
        </SideBarWrapper>
    )
}

export default SideBar
