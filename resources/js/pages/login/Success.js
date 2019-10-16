import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import log from '../../assets/img/log.png';

const LoginSignUpWrapper = styled.div `
    display: flex;
    width: 100vw;
    height: 100vh;
    background: #F5F5F5;
    @media (max-width: 700px) {
        width: 100vw;
        height: 100vh;
        background: white;
    }

`;

const ImageWrapper = styled.section `
    width: 460px;
    height: 100vh;
    background-image: url(${log});
    display: flex;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #3B5998;
        opacity: 0.3;
    }

    h1 {
        margin: auto;
        font-weight: 900;
        color: #ffffff;
        font-size: 35px;
        z-index: 1;
    }

    @media (max-width: 700px) {
        display: none
    }
`;

const ContentWrapper = styled.section `
background: #F5F5F5;
width: 100%;


    .login-logout-container {
        margin: auto;
        width: 460px;
        margin-top: 25%;
        text-align: center

        h1, p {
        opacity: 0.7;
        }

        a{
            text-decoration: none;
            color: white;
            background:  #55ACEE;
            padding: 8px 15px 8px 15px;
            border-radius: 7px;
        }

        h1, p {
            margin-bottom: 25px;
        }

    }
    @media (max-width: 768px) {
        background: #F5F5F5;
        width: 100%;

            .login-logout-container {
                margin: auto;
                margin-top: 25%;
                text-align: left;
                margin-left: 10px;

                h1, p {
                    margin-bottom: 20px;
                }
                p{
                    font-weight: 200;
                    font-size: 15px;
                }
        }
    }

    @media (max-width: 700px) {
            background: white;

            .login-logout-container {
                margin: auto;
                width: 460px;
                margin-top: 25%;
                text-align: center;
                margin-left: -20px;

                h1, p {
                    margin-bottom: 20px;
                }
                p{
                    font-weight: 500;
                    font-size: 15px;
                }
        }

    }
  
`;
const Success = () => {

    return (
        <LoginSignUpWrapper>
            <ImageWrapper>
                <h1>We speak your <br/>beauty language</h1>
            </ImageWrapper>
            <ContentWrapper>
                
                <div className="login-logout-container">
                    <h1>Congratulation!!!</h1>
                    <p>Your account was successfully created</p>
                    <p>Click on the button below to access your account</p>
                    <Link to="">Login</Link>
                </div>
            </ContentWrapper>
        </LoginSignUpWrapper>
    )
}

export default Success
