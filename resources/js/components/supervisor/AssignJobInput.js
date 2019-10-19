import React, {useState} from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput'; 
import Button from '../Button'; 
import {Link} from 'react-router-dom';
import SelectFile from './SelectFile'; 

const MainSupervisWrapper = styled.div `
    width: 100%;

        table{
            border-collapse: separate;
            border-spacing: 5px 20px;
        }
        .content-width{
            width: 60%;
            display: block;
            margin: 30px auto 30px auto;
            table{width: 100%}
            label{
               // width: 100%;
                font-family: Montserrat;
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                color: rgba(0, 0, 0, 0.7);
            }
            .content-styl{
                width: 80%;
            }
        }
        hr.clas{
            margin: 40px 0 0 0;
            border: 0.5px solid #C4C4C4;
        }
        .btn-style{
            display: flex;
            float: right;
            padding: 0 15px 0 0;
        }

        .link-style{
            text-decoration: none;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 13px;
            color: rgba(0, 0, 0, 0.8);
            margin: 10px 0 0 0;
            width: 120px;
            height: 35px;
            text-transform: capitalize;
            border-radius: 5px;
            text-align: center;
            padding: 10px 20px 10px 20px;
            box-sizing: border-box;
            background: #D9E1E8;

            :hover {
                transform: scale(1.01)
            }

        }

`;

const AssignJobInput = () => {
    const [data, setData] = useState({
        description: 'Washing and setting',
        assignEmployee: '',
        description_1: 'Manicure and Pedicure',
        assignEmployee_1: '',
        customerName: 'Chiamaka Adelakun',
        date: '29-12-2019'

    });

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };


    return (
        <MainSupervisWrapper>
            <form action="">
                <div className="content-width">
                    <table>
                        <tbody>
                            <tr>
                                <td><label>Description</label></td>
                                <td>
                                    <FormInput 
                                        type="text"
                                        value={data.description}
                                        name="discription"
                                        placeholder=""
                                        disabled
                                        style={{
                                            width: '100%',
                                            height: '35px',
                                            border: '1px solid #C4C4C4',
                                            boxSizing: 'border-box'
                                        }}
                                        handleChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Assign Employee(s)</label></td>
                                <td>
                                    <SelectFile 
                                        value={data.assignEmployee_1} 
                                        handleChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Description</label></td>
                                <td>
                                    <FormInput 
                                    type="text"
                                    value={data.description_1}
                                    name="discription"
                                    disabled
                                    style={{
                                        width: '100%',
                                        height: '35px',
                                        border: '1px solid #C4C4C4',
                                        boxSizing: 'border-box'
                                    }}
                                    handleChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Assign Employee(s)</label></td>
                                <td>
                                    <SelectFile
                                        value={data.assignEmployee_1} 
                                        handleChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Cust. Name</label></td>
                                <td>
                                    <FormInput
                                        type="text"
                                        name="custName"
                                        value={data.customerName}
                                        placeholder=""
                                        disabled
                                        style={{
                                            width: '100%',
                                            height: '35px',
                                            border: '1px solid #C4C4C4',
                                            boxSizing: 'border-box'
                                        }}
                                    handleChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Price</label></td>
                                <td>
                                    <FormInput
                                        type="text"
                                        name="price"
                                        value=""                                        
                                        placeholder="&#x20A6; 50000"
                                        disabled
                                        style={{
                                            width: '100%',
                                            height: '35px',
                                            border: '1px solid #C4C4C4',
                                            boxSizing: 'border-box'
                                        }}
                                        handleChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Date</label></td>
                                <td>
                                    <FormInput
                                        type="text"
                                        name="date"
                                        value={data.date}
                                        disabled
                                        style={{
                                            width: '100%',
                                            height: '35px',
                                            border: '1px solid #C4C4C4',
                                            boxSizing: 'border-box'
                                        }}
                                        handleChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <hr className="clas" />
                <div className="btn-style">
                    <Button style={{backgroundColor: 'rgba(59, 89, 152, 0.79)', height: '35px', margin: '10px 15px 0 0', fontSize: '13px'}}>create</Button>
                    <Link to="/Supervisor/" className="link-style">Cancel</Link>
                    <Button style={{backgroundColor: '#EA5E5E', height: '35px', margin: '10px 0 0 15px', fontSize: '13px'}}>Delete Job Card</Button>
                </div>
            </form>
        </MainSupervisWrapper>
    )

}

export default AssignJobInput;