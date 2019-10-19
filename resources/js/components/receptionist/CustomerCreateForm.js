import React, {useState} from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput';
import Button from '../Button';

const CustomerCreateFormWrap = styled.section `
    width: 45%;

    h5 {
        text-transform: capitalize;
    }
    
    .form-section {
        width: 100%;
        background: #D7DEE3;
        min-height: 380px;
        height: auto;
        padding: 20px;
        box-shadow: 0 8px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;

        form {
            display: flex;
            flex-direction: column;
            min-height: 100%;
            height: auto;
            

            .form-inp-wrp {
                margin-bottom: 15px;
            }

            .table-wrap {
                border: 0.7px solid #3B5998;
                background: #ffffff;
                min-height: 200px;
                height: auto;
                border-radius: 5px 5px 0 0;

                table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 12px;
                    text-transform: capitalize;
                    

                    thead {
                        th {
                            text-align: left;
                            padding-left: 10px;
                            height: 20px;
                            opacity: 0.6;
                            font-weight: bold;
                            border-bottom: 0.7px solid #3B5998;
                        }
                    }

                    tbody {
                        tr {
                            height: 20px;
                            
                            input {
                                margin-right: 8px;
                                transform: translateY(3px)
                            }
                        }
                    }

                    td {
                        padding-left: 10px;
                    }
                }
            }

            .total-section {
                margin-top: auto;
                font-size: 12px;
                font-weight: bold;
                text-transform: capitalize;
                padding: 15px 0;

                .input-cover {
                    float: right;
                    input {
                        border: none;
                        background: none;
                    }
                }
                
            }
        }
    }

     @media (max-width: 1000px) {
        width: 95%;
    }

    @media (max-width: 700px) {
        width: 95%;
        margin-bottom: 40px; 
    }
`;

const CustomerCreateForm = () => {
    const [value, setValue] = useState(3400)
    return (
        <CustomerCreateFormWrap>
            <h5>create a job</h5>
            <div className="form-section">
                <form action="">
                    <div className="form-inp-wrp">
                        <FormInput 
                            type='text'
                            name='custName'
                            disabled
                            style={{borderColor: '#3B5998', borderRadius: '3px', height: '25px'}}
                            value="Mrs Oriola Agungi"
                        />
                    </div>
                    <div className="form-inp-wrp">
                        <FormInput 
                            type='text'
                            name='membership'
                            disabled
                            style={{borderColor: '#3B5998', borderRadius: '3px', height: '25px'}}
                            value="Platinum"
                        />
                    </div>
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>select services</th>
                                    <th>price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="" id=""/>
                                        <span>ghana weaving and crochet</span>
                                    </td>
                                    <td>&#x20A6; 100</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="" id=""/>
                                        <span>ponytail gel</span>
                                    </td>
                                    <td>&#x20A6; 3400</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="total-section">
                        <span>total</span>
                        <div className="input-cover">
                            <input type="text" hidden name="amount" value={value}/><span>&#x20A6;{value}</span>
                        </div>
                    </div>
                    <Button type="submit" style={{width: '100%', fontSize: '12px'}}>send job card to supervisor</Button>
                </form>
            </div>
        </CustomerCreateFormWrap>
    )
}

export default CustomerCreateForm
