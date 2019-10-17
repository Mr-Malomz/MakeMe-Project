import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, Redirect} from 'react-router-dom';
import log from '../../assets/img/log.png';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import ErrorField from '../../components/ErrorField';
import GetAPI from '../../components/GetAPI';
import {PostAPI} from '../../components/PostAPI';
import Loader from '../../components/Loader';

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

        small {
            margin-bottom: 10px;
            text-align: left !important;
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
        token: '',
        password1: '',
        password2: '',
        btnDisabled: true,
        errorMsg: '',
        isRegistered: false,
        errorFetch: false,
        loading: false,
        success: false
    });

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    };

    const passwordValidator = e => {
        const password1 = document.getElementsByName('password1')[0].value;
        const password2 = document.getElementsByName('password2')[0].value;
        const number_count = /^.{6,}$/;

        if (!number_count.test(password1)) {
            setValue({
                ...value,
                errorMsg: 'Password must be greater than 6 Characters',
                btnDisabled: true
            })
        } else if (password1 !== password2) {
            setValue({
                ...value,
                errorMsg: 'Please check that you\'ve entered and confirmed your password on both field!',
                btnDisabled: true
            })
        } else {
            setValue({
                ...value,
                errorMsg: '',
                btnDisabled: false
            })
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const href = window.location.href;
        const trans_id = href.substring(href.lastIndexOf('/') + 1);
        let datas = {'trans_id': trans_id, 'password': value.password1};
        setValue({...value, loading: true})
        PostAPI('confirm', datas, 'POST')
            .then(response => {
                if (response) {
                    setValue({
                        ...value,
                        loading: false,
                        errorFetch: false,
                        success: true,
                        isRegistered: false
                    })
                } else {
                    setValue({
                        ...value,
                        loading: false,
                        errorFetch: true,
                        success: false,
                        
                    })
                }
            })
    }

    if (value.isRegistered) {
       return <Redirect to={{
            pathname: '/',
            state: { message: 'Please login with your email and password' }
        }}/>
    //    history.push({
    //        pathname: '/',
    //        state: {message: 'Please login with your email and password'}
    //    })
    }

    return (
        <LoginSignUpWrapper>
            {value.loading && <Loader />}
            <ImageWrapper>
                <h1>We speak your <br/>beauty language</h1>
            </ImageWrapper>
            <ContentWrapper>
                <header>

                    <Link to='/' className="log-signup-home">home</Link>
                </header>
                <div className="login-logout-container">
                    {value.errorFetch && <ErrorField error={'Oops!! Something went wrong. Please contact your administrator'}/>}
                    
                    <h1>welcome</h1>
                    <p>Let's get your account setup</p>
                    <form action="" onSubmit={handleSubmit}>
                        {/* <div className="login-signup-cont">
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
                        </div> */}
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
                                onKeyUp={passwordValidator}
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
                                onKeyUp={passwordValidator}
                            />
                        </div>
                        <ErrorField error={value.errorMsg} />
                        <div className="login-signp-btn">
                            <Button style={{backgroundColor: '#3B5998'}} disabled={value.btnDisabled}>create</Button>
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
