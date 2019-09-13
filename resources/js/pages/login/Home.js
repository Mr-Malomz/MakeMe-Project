import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Glide } from 'react-glide';
import "react-glide/lib/reactGlide.css";
import LoginSVG1 from '../../assets/svg/LoginSVG1';
import LoginSVG2 from '../../assets/svg/LoginSVG2';
import pic1 from '../../assets/img/pic1.jpg';
import pic2 from '../../assets/img/pic2.png';
import pic3 from '../../assets/img/pic3.png';


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

    @media(max-width:960px) {
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
        }

        section.socials{
            margin-right: 50px;
        }
    }
`;

const Home = () => {

    const initialState = {
        email: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
    };

    const [value, setValue] = useState(initialState)

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <HomeWrapper>
            <FormHomeWrapper>
                <LoginSVG1 />
                <LoginSVG2 />
                <div className="form-content">
                    <section>
                        <h1>welcome back</h1>
                        <p>Please log in with your details</p>
                        <form action="">
                            <div className="form-input-log">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="input-home" value={value.email} onChange={handleChange} required/>
                            </div>
                            <div className="form-input-log">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" className="input-home" value={value.password} onChange={handleChange} required/>
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
}

export default Home
