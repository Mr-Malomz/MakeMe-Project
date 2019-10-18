import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FromSVG1 from '../../assets/svg/FormSVG1';
import FormInput from '../FormInput';
import Button from '../Button';
import FormSVG from '../../assets/svg/FormSVG2';
import { PostAPI } from '../PostAPI';
import Loader from '../Loader';
import ErrorField from '../ErrorField';
import MessageField from '../MessageField';

const CreateEmpFormWrap = styled.section `
    width: 380px;
    min-height: 400px;
    background: #FFFFFF;
    box-shadow: 0px 12px 20px rgba(43, 86, 128, 0.25);
    margin: auto;

    h1 {
        font-weight: 300;
        text-transform: capitalize;
        text-align: center;
        transform: translateY(-30px)
    }

    form {
        padding: 10px;

        .inpt-wrap {
            margin-bottom: 15px;

            label {
                text-transform: capitalize;
                color: rgba(0, 0, 0, 0.7);
                font-size: 13px;
                margin-bottom: 8px;
                font-weight: 600;
                display: block
            }

            .radio-wrp {
                display: flex;
                /* justify-content: space-evenly; */

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
        .btn-wrapper {
            display: flex;
            margin: 20px 0;

            a {
                text-transform: capitalize;
                text-decoration: none;
                padding: 8px 30px;
                border: 2px solid #3B5998;
                border-radius: 5px;
                color: #3B5998;
                font-weight: bold;
                font-size: 14px;
                margin-left: 20px;

                :hover {
                    transform: scale(1.01)
                }
            }
        }
    }

    .svg-wrp {
        width: 100%;

        svg {
            width: 100%;
            transform: translateY(12px)
        }
    }
`;

const CreateEmpForm = () => {
    const [data, setData] = useState({
        firstname: '',
        surname: '',
        email: '',
        salary: '',
        value: '',
        jobtitle: '',
        showVal: false,
        selectedInput: 'none',
        role: '',
        isLoading: false,
        error: false,
        success: false
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

    const handleSubmit = e => {
        e.preventDefault();
        const datas = {
            firstname: data.firstname,
            surname: data.surname,
            email: data.email,
            role: data.role,
            title: data.jobtitle,
            salary: data.salary,
            payment: data.selectedInput,
            commission: data.value
        }
        setData({...data, isLoading: true});
        PostAPI('employee', datas, 'POST')
            .then(response => { 
                if (response === 'mail sent successfully') {
                    setData({
                        ...data,
                        isLoading: false,
                        error: false,
                        success: true,
                        firstname: '',
                        surname: '',
                        email: '',
                        role: '',
                        title: '',
                        salary: '',
                        payment: '',
                        commission: ''
                    })
                } else {
                    setData({
                        ...data,
                        isLoading: false,
                        error: true,
                        success: false
                    })
                }
            })
    }

    return (
        <CreateEmpFormWrap>
            {data.isLoading && <Loader />}
            <FromSVG1 />
            <h1>new employee</h1>
            {data.error && <ErrorField error={"Opps!!! something went wrong. Please contact your administrator"}/>}
            {data.success && <MessageField msg={"Employee created successfully and confirmation mail sent to the specified email"}/>}
            <form action="" onSubmit={handleSubmit}>
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
                    <label htmlFor="surname">lastname</label>
                    <FormInput
                        type="text"
                        name='surname'
                        required
                        value={data.surname}
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
                            paddingLeft: '7px'
                            }}
                    >
                        <option value=""></option>
                        <option value="Accountant">Accountant</option>
                        <option value="Supervisor">Supervisor</option>
                        <option value="Receptionist">Receptionist</option>
                        <option value="Workers">Workers</option>
                    </select>
                </div>
                <div className="inpt-wrap">
                    <label htmlFor="jobtitle">job title</label>
                    <FormInput
                        type="text"
                        name='jobtitle'
                        required
                        value={data.jobtitle}
                        handleChange={handleChange}
                        style={{borderColor: '#C4C4C4'}}
                    />
                </div>
                <div className="inpt-wrap">
                    <label htmlFor="salary">salary</label>
                    <FormInput
                        type="number"
                        name='salary'
                        value={data.salary}
                        handleChange={handleChange}
                        style={{borderColor: '#C4C4C4'}}
                    />
                </div>
                <div className="inpt-wrap">
                    <label htmlFor="payment">payment option</label>
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
                        type="number"
                        name='value'
                        required
                        placeholder="enter a percentage"
                        value={data.value}
                        handleChange={handleChange}
                        style={{borderColor: '#C4C4C4'}}
                    />
                </div>
                }
                <div className="inpt-wrap">
                    <label htmlFor="email">email</label>
                    <FormInput
                        type="email"
                        name='email'
                        required
                        value={data.email}
                        handleChange={handleChange}
                        style={{borderColor: '#C4C4C4'}}
                    />
                </div>
                <div className="btn-wrapper">
                    <Button type="submit" style={{background: '#3B5998'}}>create</Button>
                    <Link to='/superadmin/employees'>cancel</Link>
                </div>
            </form>
            <div className="svg-wrp">
                <FormSVG />
            </div>
        </CreateEmpFormWrap>
    )
}

export default CreateEmpForm
