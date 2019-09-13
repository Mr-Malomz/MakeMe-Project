import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
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
        z-index: 1;
    }

    @media (max-width: 700px) {
        display: none
    }
`;

const ContentWrapper = styled.section `
    background: #F5F5F5;
    width: 100%;

    header {
        margin-top: 30px;

        .log-signup-home {
            text-decoration: none;
            color: #000000;
            opacity: 0.7;
            float: right;
            margin-right: 90px; 
            text-transform: capitalize;
            font-weight: bold;

            :hover {
                opacity: 1
            }
        }
    }


    .login-logout-container {
        margin: auto;
        width: 460px;
        margin-top: 12%;

        h1, label, p {
        opacity: 0.7;
        }

        h1, p {
            margin-bottom: 20px;
        }

        .login-signup-cont {
            margin-bottom: 20px;

            label {
                display: block;
                font-weight: bold;
                font-size: 12px;
                margin-bottom: 10px;
            }
        }

        .login-signp-btn {
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

    
    
`;
const Login_SignUp = () => {
    const [value, setValue] = useState({
        email: '',
        password1: '',
        password2: ''
    })

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    return (
        <LoginSignUpWrapper>
            <ImageWrapper>
                <h1>We speak your <br/>beauty language</h1>
            </ImageWrapper>
            <ContentWrapper>
                <header>

                    <Link to='/' className="log-signup-home">home</Link>
                </header>
                <div className="login-logout-container">
                    <h1>welcome</h1>
                    <p>Let's get your account setup</p>
                    <form action="">
                        <div className="login-signup-cont">
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
                        <div className="login-signup-cont">
                            <label htmlFor="password1">Password *</label>
                            <FormInput 
                                type="password" 
                                name="password1" 
                                label="password1" 
                                style={{borderColor: '#3B5998'}}
                                required
                                value={value.password1}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="login-signup-cont">
                            <label htmlFor="password2">Confirm Password *</label>
                            <FormInput 
                                type="password" 
                                name="password2" 
                                label="password2" 
                                style={{borderColor: '#3B5998'}}
                                required
                                value={value.password2}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="login-signp-btn">
                            <Button style={{backgroundColor: '#3B5998'}}>create</Button>
                            <Link to='/' className="cancel-btn-home">cancel</Link>
                        </div>
                        <span>Already have an account ? <Link to='/'>Sign In</Link></span>
                    </form>
                </div>
            </ContentWrapper>
        </LoginSignUpWrapper>
    )
}

export default Login_SignUp
