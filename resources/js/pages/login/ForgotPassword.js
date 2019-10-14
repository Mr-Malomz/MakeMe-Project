import React, {useState} from 'react';
import styled from 'styled-components';
//import {Link, Redirect} from 'react-router-dom';
import log from '../../assets/img/log.png';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

const LoginSignUpWrapper = styled.div `
    display: flex;
    width: 100vw;
    height: 100vh;
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
        padding: 0 0 0 15px;
        z-index: 1;
    }

    @media (max-width: 700px) {
        display: none
    }
`;

const ContentWrapper = styled.section `
    background: #F5F5F5;
    width: 80%;

    .password-container {
        margin: auto;
        width: 460px;
        margin-top: 12%;

        h1, label, p, small {
        opacity: 0.7;
        }

        small {
            margin-bottom: 100px;
            text-align: left !important;
        }

        h1, p {
            margin-bottom: 20px;
        }

        .email-cont {
            margin-top: 20px;
            margin-bottom: 20px;

            label {
                display: block;
                font-weight: bold;
                font-size: 12px;
                margin-bottom: 10px;
            }
        }

        .password-btn {
            display: flex;
            margin-bottom: 20px;

            .cancel-btn-home {
                text-decoration: none;
                font-weight: bolder;
                margin-left: 30px;
                width: 120px;
                height: 38px;
                font-size: 14px;
                color: #0A2D78;
                text-transform: capitalize;
                border-radius: 7px;
                font-weight: bold;
                border: 2px solid #0A2D78;
                text-align: center;
                padding-top: 10px;

                :hover {
                    transform: scale(1.08)
                }
            }
        }
        span {
            margin-top: 20px;
            font-weight: bold;
            font-size: 12px;
        }
    }

    @media (max-width: 768px) {

        .password-container {
            margin: auto;
            width: 460px;
            margin-top: 15%;
            padding: 0 30px 0 30px;
        }
    }

    @media (max-width: 700px) {
        width: fit-content;
        height: 100vh;

        .password-container {
            margin: auto;
            width: 460px;
            margin-top: 15%;
            padding: 0 30px 0 30px;
        }
    }
    
    
`;
const ForgotPassword = () => {
    const [value, setValue] = useState({
        email: '',
        //isRegistered: false
    });

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    };


    const handleSubmit = e => {
        e.preventDefault()
        //setValue({...value, isRegistered: true})
    }

    // if (value.isRegistered) {
    //    return <Redirect to={{
    //         pathname: '/',
    //         state: { message: 'Please login with your email and password' }
    //     }}/>
    //    history.push({
    //        pathname: '/',
    //        state: {message: 'Please login with your email and password'}
    //    })
    //}

    return (
        <LoginSignUpWrapper>
            <ImageWrapper>
                <h1>We speak your <br/>beauty language</h1>
            </ImageWrapper>
            <ContentWrapper>
                <div className="password-container">
                    <h1>Password recovery</h1>
                    <p>Enter your registered email below</p>
                    <small>If your email exist, a forgot password link will be sent to your registered email, do check your email and follow the instruction </small>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="email-cont">
                            <label htmlFor="email">Email *</label>
                            <FormInput 
                                type="email" 
                                name="email" 
                                label="email" 
                                style={{borderColor: '#3B5998'}}
                                required
                                value={value.email}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="password-btn">
                            <Button style={{backgroundColor: '#3B5998', border: 'none'}}>Reset Password</Button>
                        </div>
                    </form>
                </div>
            </ContentWrapper>
        </LoginSignUpWrapper>
    )
}

export default ForgotPassword;
