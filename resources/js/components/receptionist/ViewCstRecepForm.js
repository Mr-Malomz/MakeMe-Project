import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import FormInput from '../FormInput';

const CreateCstRecepFormWrap = styled.section `
    width: 100%;
    height: auto;
    background: #ffffff;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    h5 {
        height: 35px;
        background: #E9EEF8;
        text-align: center;
        text-transform: capitalize;
        line-height: 35px;
    }

    form {
        padding: 30px;

        .header{
            display: flex;
            justify-content: space-around;
            

            .upload-sect {
                img {
                    width: 130px;
                    height: 130px;
                    border-radius: 50%;
                    margin-bottom: 20px
                }

                .upload {
                    margin-bottom: 20px;

                    label {
                        display: flex;
                        border: 1px solid #C4C4C4;
                        padding: 5px 15px 5px 15px;
                        opacity: 0.7;
                        font-weight: bold;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 12px;

                        span {
                            transform: translateY(5px)
                        }

                        i {
                            display: block;
                            margin-right: 10px;
                        }

                        input[type='file'] {
                            color: transparent;
                            display: none;
                        }
                    }
                }
            }

            .member-sect {
                text-align: left;
                font-size: 14px;
                margin-top: 23px;
                /* width: 45%; */

                input[type='radio'] {
                    margin-bottom: 20px;
                }
            }

            section {
                width: 200px;
                height: 100px;
                background: #ffffff;
                text-align: center;
                margin-bottom: 30px;
                padding: 5px;
                border-radius: 10px;
                box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.25), 0px 12px 20px rgba(0, 0, 0, 0.25);

                h5 {
                    text-transform: capitalize;
                    font-weight: bold;
                    opacity: 0.7;
                    background: none;
                }

                span {
                    width: 130px;
                    height: 40px;
                    border-radius: 10px;
                    background: rgba(43, 86, 128, 0.18);
                    display: block;
                    color: #000000;
                    font-size: 16px;
                    text-align: center;
                    font-weight: bold;
                    margin: 5px auto;
                    line-height: 40px;
                }
            }
        }

        .input-wrp {
            margin-bottom: 10px;
        }

        .btn-wrapper {
            text-align: center;

            a {
                width: 120px;
                height: 38px;
                font-size: 14px;
                color: #ffffff;
                text-transform: capitalize;
                border-radius: 7px;
                font-weight: bold;
                background: #525252;
                text-decoration: none;
                display: inline-block;
                line-height: 38px;

                :hover {
                    transform: scale(1.01)
                }
            }
        }
    }

    @media (max-width: 700px) {
        .header {
            flex-direction: column;

            label {
                width: 65%
            }

            .member-sect {
                width: 80% !important;
                margin-bottom: 30px;
            }
        }
    }
`;

const ViewCstRecepForm = () => {
    const [data, setData] = useState({
        selectedInput: '',
        firstname: '',
        lastname: '',
        email: '',
        gender: 'gender',
        phonenumber: '',
        address: '',
        city: '',
        file: 'https://via.placeholder.com/150',
    });

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const inputChange = e => {
        setData({...data, selectedInput: e.target.value})
    };

    const selectHandle = e => {
        setData({...data, gender: e.target.value})
    };

    return (
        <CreateCstRecepFormWrap>
            <h5>customer data form</h5>
            <form action="">
                <div className="header">
                    <div className="upload-sect">
                        <img src={data.file} alt="profile picture"/>
                    </div>
                    <div className="member-sect">
                        <input 
                            type="radio" 
                            name="member" 
                            value="vip" 
                            checked={data.selectedInput === 'vip'} 
                            onChange={inputChange}/> VIP Client <br/>
                        <input 
                            type="radio" 
                            name="member" 
                            value="member" 
                            checked={data.selectedInput === 'member'} 
                            onChange={inputChange}/> Exclusive Member <br/>
                        <input 
                            type="radio" 
                            name="member" 
                            value="partner" 
                            checked={data.selectedInput === 'partner'} 
                            onChange={inputChange}/> Exclusive Partner  <br/>
                        <input 
                            type="radio" 
                            name="member" 
                            value="dealer" checked={data.selectedInput === 'dealer'} 
                            onChange={inputChange}/> Sub Dealer  <br/>
                        <input 
                            type="radio" 
                            name="member" 
                            value="other" 
                            checked={data.selectedInput === 'other'} 
                            onChange={inputChange}/> Other  <br/>
                        {/* <FormInput
                            type="text"
                            name="other"
                            placeholder="Other"
                            value=""
                            handleChange={handleChange}
                            style={{borderColor: '#7C7C7C', borderRadius: '5px'}}
                        /> */}
                    </div>
                    <section>
                        <h5>wallet balance</h5>
                        <span>	&#x20A6; 100,000</span>
                    </section>
                </div>
                <div className="input-wrp">
                    <FormInput
                        type="text"
                        name="firstname"
                        placeholder="Firstname"
                        value={data.firstname}
                        required
                        handleChange={handleChange}
                        style={{borderColor: '#7C7C7C', borderRadius: '5px'}}
                    />
                </div>
                <div className="input-wrp">
                    <FormInput
                        type="text"
                        name="lastname"
                        placeholder="Lastname"
                        value={data.lastname}
                        required
                        handleChange={handleChange}
                        style={{borderColor: '#7C7C7C', borderRadius: '5px'}}
                    />
                </div>
                <div className="input-wrp">
                    <FormInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        disabled
                        value={data.email}
                        handleChange={handleChange}
                        style={{borderColor: '#7C7C7C', borderRadius: '5px'}}
                    />
                </div>
                <div className="input-wrp">
                    <select 
                        name="gender" 
                        id="" 
                        disabled
                        value={data.gender}
                        onChange={selectHandle}
                        style={{
                            borderColor: '#7C7C7C', 
                            borderRadius: '5px', 
                            width: '100%', 
                            height: '35px', 
                            borderWidth: '0.7px',
                            paddingLeft: '7px'
                            }}
                    >
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="input-wrp">
                    <FormInput
                        type="tel"
                        name="phonenumber"
                        placeholder="Phonenumber"
                        value={data.phonenumber}
                        disabled
                        handleChange={handleChange}
                        style={{borderColor: '#7C7C7C', borderRadius: '5px'}}
                    />
                </div>
                <div className="input-wrp">
                    <FormInput
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={data.address}
                        disabled
                        handleChange={handleChange}
                        style={{borderColor: '#7C7C7C', borderRadius: '5px'}}
                    />
                </div>
                <div className="input-wrp">
                    <FormInput
                        type="text"
                        name="city"
                        placeholder="City"
                        value={data.city}
                        disabled
                        handleChange={handleChange}
                        style={{borderColor: '#7C7C7C', borderRadius: '5px'}}
                    />
                </div>
                <div className="btn-wrapper">
                    <Link to='/reception/editcustomer'>edit</Link>                   
                </div>
            </form>
        </CreateCstRecepFormWrap>
    )
}

export default ViewCstRecepForm
