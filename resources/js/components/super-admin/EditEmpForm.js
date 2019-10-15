import React, {useState} from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput';
import Button from '../Button';
import { Link } from 'react-router-dom';

const EditEmpFormWrap = styled.section `
    width: 100%;
    background: #F5F5F5;
    box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    min-height: 400px;
    margin-left: 40px;

    h1 {
        background: #ffffff;
        padding: 12px 60px;
        color: rgba(0, 0, 0, 0.6);
        border-radius: 10px 10px 0px 0px;
        font-weight: 600
    }

    form {
        width: 100%;

        .form-cont {
            width: 65%;
            margin: 30px auto;

            .inpt-wrap {
                margin-bottom: 30px;
                display: flex;

                label {
                    text-transform: capitalize;
                    color: rgba(0, 0, 0, 0.7);
                    font-size: 13px;
                    margin-right: 40px;
                    font-weight: 600;
                    display: block;
                    transform: translateY(5px)
                }

                .radio-wrp {
                    display: flex;
                    /* justify-content: space-between; */
                    margin-left: -10px;
                    width: 80%;

                    span {
                        :nth-child(2) {
                            transform: translateX(40px)
                        }
                        span {
                            margin-left: 10px;
                            text-transform: capitalize;
                        }
                    }
                }
                
            }
        }

        .btn-wrapper {
            display: flex;
            margin: 140px auto;
            border-top: 1px solid #C4C4C4;
            width: 100%;
            padding: 10px 30px;
            justify-content: flex-end;

            a {
                text-transform: capitalize;
                text-decoration: none;
                padding: 12px 30px;
                background: #D9E1E8;
                border-radius: 5px;
                color: rgba(0, 0, 0, 0.8);
                font-weight: bold;
                font-size: 14px;
                margin: 0 20px;

                :hover {
                    transform: scale(1.01)
                }
            }
        }
    }

    @media (max-width: 700px) {
        margin-left: 0;
        
        h1 {
            font-size: 16px;
            padding-left: 30px;
        }

        form {
            font-size: 14px;

            .form-cont {
                width: 90% !important
            }
        }
    }
`;

const EditEmpForm = () => {
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        value: '',
        salary: '',
        jobTitle: '',
        showVal: false,
        selectedInput: 'none',
        role: ''
    })

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const inputChangeOpen = e => {
        setData({
            ...data,
            selectedInput: e.target.value,
            showVal: true
        })
    };

    const inputChangeClose = e => {
        setData({
            ...data,
            selectedInput: e.target.value,
            showVal: false
        })
    };

    const selectHandle = e => {
        setData({
            ...data,
            role: e.target.value
        })
    };

    return (
        <EditEmpFormWrap>
            <h1>Manage selected employee</h1>
            <form action="">
                <div className="form-cont">
                    <div className="inpt-wrap">
                        <label htmlFor="firstname">firstname</label>
                        <FormInput
                            type="text"
                            name='firstname'
                            required
                            value={data.firstname}
                            handleChange={handleChange}
                            style={{borderColor: '#C4C4C4'}}
                        />
                    </div>
                    <div className="inpt-wrap">
                        <label htmlFor="lastname">lastname</label>
                        <FormInput
                            type="text"
                            name='lastname'
                            required
                            value={data.lastname}
                            handleChange={handleChange}
                            style={{borderColor: '#C4C4C4'}}
                        />
                    </div>
                    <div className="inpt-wrap">
                        <label htmlFor="select">role</label>
                        <select 
                            name="role" 
                            id="" 
                            required
                            value={data.role}
                            onChange={selectHandle}
                            style={{
                                borderColor: '#7C7C7C', 
                                width: '100%', 
                                height: '30px', 
                                borderWidth: '0.5px',
                                marginLeft: '36px'
                                }}
                        >
                            <option value=""></option>
                            <option value="accountant">Accountant</option>
                            <option value="supervisor">Supervisor</option>
                            <option value="receptionist">Receptionist</option>
                            <option value="workers">Workers</option>
                        </select>
                    </div>
                    <div className="inpt-wrap">
                        <label htmlFor="jobTitle" style={{width: '70px'}}>job title</label>
                        <FormInput
                            type="text"
                            name='jobTitle'
                            required
                            value={data.jobTitle}
                            handleChange={handleChange}
                            style={{borderColor: '#C4C4C4', marginLeft: '8px'}}
                        />
                    </div>
                    <div className="inpt-wrap">
                        <label htmlFor="salary">salary</label>
                        <FormInput
                            type="text"
                            name='salary'
                            value={data.salary}
                            handleChange={handleChange}
                            style={{borderColor: '#C4C4C4', marginLeft: '25px'}}
                        />
                    </div>
                    <div className="inpt-wrap">
                        <label htmlFor="payment">pay. option</label>
                        <div className="radio-wrp">
                            <span>
                                <input 
                                    type="radio"
                                    name="payment" 
                                    value="percentage"
                                    checked={data.selectedInput === 'percentage'}
                                    onChange={inputChangeOpen}
                                /> 
                                <span>percentage</span>
                            </span>
                            <span>
                                <input 
                                    type="radio" 
                                    name="payment" 
                                    value="none"
                                    checked={data.selectedInput === 'none'}
                                    onChange={inputChangeClose}
                                /> 
                                <span>none</span>
                            </span>
                        </div>
                    </div>
                    {data.showVal && 
                        <div className="inpt-wrap">
                        <FormInput
                            type="text"
                            name='value'
                            required
                            placeholder="enter a percentage"
                            value={data.value}
                            handleChange={handleChange}
                            style={{borderColor: '#C4C4C4', marginLeft: '103px'}}
                        />
                    </div>
                    }
                    <div className="inpt-wrap">
                        <label htmlFor="email">email</label>
                        <FormInput
                            type="text"
                            name='email'
                            required
                            value={data.email}
                            handleChange={handleChange}
                            style={{borderColor: '#C4C4C4', marginLeft: '25px'}}
                        />
                    </div>
                </div>    
                <div className="btn-wrapper">
                    <Button type="submit" style={{background: '#3B5998'}}>save</Button>
                    <Link to='/superadmin/employees'>cancel</Link>
                    <Button type="submit" style={{background: '#EA5E5E'}}>delete user</Button>
                </div>
            </form>
        </EditEmpFormWrap>
    )
}

export default EditEmpForm
