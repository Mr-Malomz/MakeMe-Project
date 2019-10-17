import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/authAction';
import { Redirect, Link } from 'react-router-dom';
import { Glide } from 'react-glide';
import "react-glide/lib/reactGlide.css";
import LoginSVG1 from '../../assets/svg/LoginSVG1';
import LoginSVG2 from '../../assets/svg/LoginSVG2';
import pic1 from '../../assets/img/pic1.jpg';
import pic2 from '../../assets/img/pic2.png';
import pic3 from '../../assets/img/pic3.png';
import ErrorField from '../../components/ErrorField';
import Loader from '../../components/Loader';
import axios from 'axios'


const HomeWrapper = styled.div `
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    > .slide {
        width: 100%;
        height: 100%;
        img {
            width: 60vw;
            height: 100vh;
        }

        .glide--next-btn, .glide--prev-btn {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            opacity: 0.5
        }

    }

    @media (max-width: 2000px) {
        > .slide {
            img {
                width: 66vw;
            }
        }
    }

    @media (max-width:960px) {
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }

        input {
            width: 300px !important ; 
        }

        button {
            left: 70px !important;
        }

        .glide--next-btn, .glide--prev-btn {
            display: none;
        }

    }

    @media (max-width: 700px) {
        .slide {
            display: none;
        }

        input {
            width: 420px !important ; 
        }

        button {
            left: 150px !important;
        }
    }
`;

const FormHomeWrapper = styled.div `
    width: 556px;
    height: 100%;
    background: #0F1C36;
    display: flex;
    flex-direction: column;
    position: relative;

    > svg:nth-child(1) {
        margin-left: auto;
    }

    > svg:nth-child(2) {
        margin-top: auto;
    }

    > .form-content {
        position: absolute;
        color: #ffffff;
        width: 439px;
        top: 140px;
        left: 58px;
        
        > section {

            > h1 {
                text-align: center;
                text-transform: capitalize;
                margin-bottom: 15px;
            }

            > p {
                text-align: center;
                margin-bottom: 15px
            }

            > form {
                > .form-input-log {
                    margin-bottom: 15px;

                    > label {
                        margin-bottom: 8px;
                        display: block;
                    }

                    a {
                        text-decoration: none;
                        color: white;
                        font-size: 12px;

                        :hover {
                            border-bottom: 1px solid white;
                        }
                    }

                    > input {
                        width: 420px;
                        height: 35px;
                        border-radius: 30px;
                        border: none;
                        padding: 20px;

                        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                            padding-left: 10px
                        }
                        ::-moz-placeholder { /* Firefox 19+ */
                            padding-left: 10px
                        }
                        :-ms-input-placeholder { /* IE 10+ */
                            padding-left: 10px
                        }
                        :-moz-placeholder { /* Firefox 18- */
                            padding-left: 10px
                        }

                        :focus {
                            outline-width: 0;
                        }
                    }
                }
                button {
                    position: relative;
                    left: 140px;
                    width: 180px;
                    height: 45px;
                    background: none;
                    text-transform: capitalize;
                    border: 2px solid #ffffff;
                    border-radius: 30px;
                    font-size: 16px;
                    color: #ffffff;
                    margin: 20px auto;

                    :hover {
                        transform: scale(1.08)
                    }
                }
            }

        }

        > section.socials {
            display: flex;
            align-items: center;
            justify-content: center;
            
            a {
                text-decoration: none;

                div {
                    width: 40px;
                    height: 40px;
                    background: #ffffff;
                    margin-left: 20px;
                    border-radius: 50%;
                    opacity: 0.2;
                    align-content: center;
                    justify-content: center;
                    display: flex;

                    &:nth-child(1) {
                            color: #3B5998;
                        }

                    :hover {
                        background: #ffffff;
                        opacity: 0.8;
                    }

                    i {
                        line-height: inherit;
                        line-height: 40px;
                        
                    }

            }
            }
            
        }
    }

    @media(max-width:960px) {
        width: 370px;
        

        .form-content {
            width: 300px;
            left: 30px;
            top: 90px;

            .form-input-log > input {
                width: 200px;
            }

            button {
                left: 0
            }
        }
    }

    @media (max-width: 700px) {
        width: 100%;
        .form-content {
            width: 100%;

            .form-input-log {
                a {
                    display: inline-block;
                }
            }
        }

        section.socials{
            margin-right: 50px;
        }
    }
`;

const Home = ({isLoggingIn, loginError, isAuthenticated, user, loginUser, location}) => {

    const initialState = {
        email: "",
        password: "",
        // isSubmitting: false,
        // errorMessage: null
    };

    const [value, setValue] = useState(initialState)

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = value;
        const creds = {email: email, password: password};
        loginUser(creds)
        setValue({...value, email: '', password: ''})

        // axios.post('http://127.0.0.1:8000/api/login', {
        //     headers: {
        //         // 'Content-Type': 'application/json',
        //         // 'Accept': 'application/json',
        //     },
        //     body: `email=${creds.email}&password=${creds.password}`
        // })
        //     .then(response => console.log(response))
            // .then(user => {
            //     localStorage.setItem('id_token', user.Trans_Id)
            //     console.log(user)
            //     // dispatch(receiveLogin(user))
            // })
            // .catch(err => dispatch(loginError()))
        
    }

    //check for authentication
    const referer = location.state ? location.state.from : null;
    if (isAuthenticated) {
        switch (user.Job_Role) {
            case "Super Admin":
                return <Redirect to={referer || "/superadmin"} />
                break;
            
            case "Accountant":
                return <Redirect to={referer || "/accountant"} />
                break;
            
            case "Supervisor":
                return <Redirect to={referer || "/supervisor"} />
                break;

            case "Reception":
                return <Redirect to={referer || "/reception"} />
                break;

            case "Workers":
                return <Redirect to={referer || "/workers"} />
                break;
            
        }
    }
    

    return (
        <HomeWrapper>
            {isLoggingIn && <Loader />}
            <FormHomeWrapper>
                <LoginSVG1 /> 
                <LoginSVG2 />
                <div className="form-content">
                    <section>
                        <h1>welcome back</h1>
                        <p>Please log in with your details</p>
                        {loginError || typeof user === 'string' && <ErrorField error="Incorrect Password or Username" />}
                        <form action="" onSubmit={handleSubmit}>
                            <div className="form-input-log">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="input-home" value={value.email} onChange={handleChange} required/>
                            </div>
                            <div className="form-input-log">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" className="input-home" value={value.password} onChange={handleChange} required/>
                                <Link to="/forgotpassword">Forget your password ?</Link>
                            </div>
                            <button>sign in</button>
                         </form>
                    </section>
                    <section className="socials">
                        <a href="http://www.facebook.com/MakeMeSalon/" target="_blank"><div><i className="fab fa-facebook-f"></i></div></a>
                        <a href="http://www.twitter.com/ugo007makeme" target="_blank"><div><i className="fab fa-twitter"></i></div></a>
                        <a href="mailto:info@makemesalon.com" target="_blank"><div><i className="far fa-envelope"></i></div></a>
                        <a href="http://www.instagram.com/makemesalon" target="_blank"><div><i className="fab fa-instagram"></i></div></a>
                    </section>
                </div>
            </FormHomeWrapper>
            <div className="slide">
                <Glide
                    height={500}
                    width={720}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    dots={true}
                    infinite={true}
                >
                    <img src={pic1} alt="image1" />
                    <img src={pic2} alt="image2" />
                    <img src={pic3} alt="image3" />
                </Glide>
            </div>
        </HomeWrapper>
    )
};

const MapStateToProps = state => {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
    }
}

const MapDispatchToProps = dispatch => {
    return {
        loginUser: (creds) => dispatch(loginUser(creds))
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(Home);
