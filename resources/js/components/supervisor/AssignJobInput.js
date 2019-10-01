import React, {useState} from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput'; 
import Button from '../Button'; 
import {Link} from 'react-router-dom';

const MainSupervisWrapper = styled.div `
    width: 100%;

        .content-width{
            width: 60%;
            display: block;
            margin: 30px auto 30px auto;
            
            label{
                width: 20%;
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
        hr{
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
            font-size: 14px;
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
        assignEmply: '',
        assign: ''

    });

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const selectHandle = e => {
        setData({...data, assign: e.target.value})
    };

    return (
        <MainSupervisWrapper>
            <form action="">
                <div className="content-width">
                    <label>Assigned Employee(s)</label>
                    <div className="content-styl">

                    </div>
                </div>
                <div className="content-width">
                    <label>Description</label>
                    <FormInput 
                        type="text"
                        value=""
                        name="discription"
                        placeholder="Washing and setting"
                        disabled
                        style={{
                            width: '80%',
                            height: '35px',
                            border: '1px solid #C4C4C4',
                            boxSizing: 'border-box'
                        }}
                    

                    />
                </div>
                <div className="content-width">
                    <label>Cust. Name</label>
                    <FormInput
                        type="text"
                        name="custName"
                        value={data.name}
                        placeholder="Chiamaka Adelakun"
                        disabled
                        style={{
                            width: '80%',
                            height: '35px',
                            border: '1px solid #C4C4C4',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>
                <div className="content-width">
                    <label>Price</label>
                    <FormInput
                        type="text"
                        name="price"
                        value={data.name}
                        placeholder=" &#x20A6; 50000"
                        disabled
                        style={{
                            width: '80%',
                            height: '35px',
                            border: '1px solid #C4C4C4',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>
                <div className="content-width">
                    <label>Date</label>
                    <FormInput
                        type="Date"
                        name="date"
                        value={data.name}
                        placeholder="29-Dec-2019"
                        disabled
                        style={{
                            width: '80%',
                            height: '35px',
                            border: '1px solid #C4C4C4',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>
                <div className="content-width">
                    <label>Assign</label>
                    <select 
                        name="assign" 
                        id="" 
                        required
                        value={data.assign}
                        onChange={selectHandle}
                        style={{
                            borderColor: '#C4C4C4', 
                            width: '80%', 
                            height: '35px', 
                            borderWidth: '0.7px',
                            paddingLeft: '7px'
                            }}
                    >
                        <option value="">Assign an Employee ...</option>
                        <option value="Funke">Funke Jenny</option>
                        <option value="Vivian">Amed Vivian</option>
                        <option value="Joy">Aunty sis</option>
                        <option value="Peace">Brother bros</option>
                        <option value="Uncle">Uncle bro</option>
                    </select>
                </div>
                <hr />
                <div className="btn-style">
                    <Button style={{backgroundColor: '#3B5998', height: '35px', margin: '10px 15px 0 0'}}>create</Button>
                    <Link to="/Supervisor/" className="link-style">Cancel</Link>
                    <Button style={{backgroundColor: '#3B5998', height: '35px', margin: '10px 0 0 15px'}}>create</Button>
                </div>
            </form>
        </MainSupervisWrapper>
    )

}

export default AssignJobInput;