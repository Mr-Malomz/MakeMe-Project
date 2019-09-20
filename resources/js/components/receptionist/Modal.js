import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import FormInput from '../FormInput';
import Button from '../Button';

const ModalWrapper = styled.div `
    position: absolute;
    left: 0;
    width: 100vw;
    height: 100vh;
    
    .layer-section{
        position: relative;
        width: 100%;
        height: 100%;
        background: #000000;
        z-index: 1;
        opacity: 0.2;
        
    }

    .search-section {
        width: 40%;
        height: 200px;
        background: #F5F8FD;
        position: absolute;
        z-index: 2;
        top: 0;
        margin: 12% 30% 12% 30%;
        padding: 30px 50px;
        text-align: center;

        h5 {
            color: #2B5680;
            text-transform: capitalize;
            margin-bottom: 10px;
        }

        .btn-form-sect {
            display: flex;
            margin-top: 15px;
            align-items: center;
            justify-content: center;

            a {
                text-decoration: none;
                font-weight: bolder;
                margin-right: 30px;
                width: 120px;
                height: 38px;
                font-size: 14px;
                text-transform: capitalize;
                border-radius: 7px;
                font-weight: bold;
                text-align: center;
                padding-top: 10px;
                display: block;
                color: #F62525;
                border: 2px solid #F62525;

                :hover {
                    transform: scale(1.08)
                }
            }
        }

        hr {
            border: 0.3px solid #9C9A9A;
            margin: 15px 0 15px 0;
        }

        p {
            font-size: 14px;
            
            a {
                text-transform: uppercase;
                text-decoration: none;
                color: #2B5680;
                font-weight: bold;

                :hover {
                    color: black;
                }
            }
        }
    }

    @media (max-width: 1200px){
        width: 103.5%;
        
        p {
            font-size: 12px !important;
        }
    }

    @media (max-width: 1000px) {
        height: 125%;
        width: 108%;

        .search-section {
            font-size: 14px;

            p {
                font-size: 12px !important;
            }
        }
    }

    @media (max-width: 700px) {
        width: 111%;

        .search-section {
            width: 60%;
            margin: 25% 20% 25% 20%;
            height: 210px;

            p {
                font-size: 11px !important;
            }
        }
    }
`;

const Modal = ({handleModalHide}) => {
    const [tel, setTel] = useState('');

    const handleChange = e => {
        setTel(e.target.value)
    };

    return (
        <ModalWrapper>
            <div className="layer-section" onClick={handleModalHide}></div>
            <div className="search-section">
                <h5>enter customer phone number</h5>
                <form action="">
                    <FormInput 
                        type="tel"
                        name="tel"
                        placeholder="Phone Number"
                        required
                        style={{borderColor: '#969393'}}
                        value={tel}
                        handleChange={handleChange}
                    />
                    <div className="btn-form-sect">
                        <Link to="reception" onClick={handleModalHide}>cancel</Link>
                        <Button style={{background: "#2B5680"}}>search</Button>
                    </div>
                </form>
                <hr/>
                <p>If Customer's Record does not exist, <Link>click here</Link></p>
            </div>
        </ModalWrapper>
    )
}

export default Modal
