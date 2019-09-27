import React, {useState} from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput';
import Button from '../Button';
import { Link } from 'react-router-dom';

const EditServiceFormWrap = styled.section `
    width: 100%;
    background: #F5F5F5;
    box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    min-height: 378px;
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
                    justify-content: space-between;
                    margin-left: -10px;
                    width: 80%;

                    span {
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

const EditServiceForm = () => {
    const [data, setData] = useState({
        service: '',
        price: ''
    })

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    return (
        <EditServiceFormWrap>
            <h1>Manage selected service</h1>
            <form action="">
                <div className="form-cont">
                    <div className="inpt-wrap">
                        <label htmlFor="service">service</label>
                        <FormInput
                            type="text"
                            name='service'
                            required
                            value={data.service}
                            handleChange={handleChange}
                            style={{borderColor: '#C4C4C4'}}
                        />
                    </div>
                    <div className="inpt-wrap">
                        <label htmlFor="price">price</label>
                        <FormInput
                            type="text"
                            name='price'
                            required
                            value={data.price}
                            handleChange={handleChange}
                            style={{borderColor: '#C4C4C4', marginLeft: '15px'}}
                        />
                    </div>
                </div>    
                <div className="btn-wrapper">
                    <Button type="submit" style={{background: '#3B5998'}}>save</Button>
                    <Link to='/accountant'>cancel</Link>
                    <Button style={{background: '#EA5E5E'}}>delete user</Button>
                </div>
            </form>
        </EditServiceFormWrap>
    )
}

export default EditServiceForm
