import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../Button';

const PaymntSlipWrap = styled.section `
    width: 45%;

    h5, h6 {
        text-transform: capitalize
    }

    .content-wrapper {
        background: #ffffff;
        min-height: 380px;
        height: auto;
        box-shadow: 0 8px 10px rgba(0, 0, 0, 0.25);
        padding: 10px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;

        .content-main {
            border: 0.7px solid #3B5998;
            border-radius: 5px;
            max-height: calc(380px - 10px);
            /* height: auto; */
            padding: 40px 5px 5px 5px;
            display: flex;
            flex-direction: column;
            overflow-y: auto;

            h6 {
                margin-bottom: 10px;
            }

            h6:first-child {
                text-align: center;
            }

            span {
                margin-left: 8px;
                font-weight: 18px;
                opacity: 0.6;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                font-size: 12px;
                text-transform: capitalize;

                thead {

                    th {
                        text-align: left;
                        height: 25px;
                        opacity: 0.7;
                        font-weight: bold;
                        border-bottom: 0.7px solid #3B5998;
                    }
                }

                tbody {
                    tr {
                        height: 25px;   
                    }
                }
            }

            form {
                margin-top: auto;
                border-top: 0.7px solid #3B5998;
                padding: 5px 0 5px 0;

                .bottom-sect {
                    
                    span {
                        font-size: 12px;
                    }
                    
                    .wallet-sect {
                        display: flex;
                        justify-content: space-between;

                        .inp-case {
                            display: flex;
                            
                            h6 {
                                transform: translateY(-10px)
                            }
                            input {
                                margin-right: 8px;
                            }
                        }
                    }

                    .amount-sect {
                        display: flex;
                        justify-content: space-between;
                        h6 {
                            text-align: left;
                        }

                    }
                }

                h6:last-child {
                    text-align: center;
                    margin: 10px 0;
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

const PaymntSlip = () => {
    const [state, setState] = useState(3500);

    return (
        <PaymntSlipWrap>
            <h5>completed job card</h5>
            <div className="content-wrapper">
                <div className="content-main">
                    <h6>job card</h6>
                    <h6>customer's name: <span>miss chinonso agunbi</span></h6>
                    <h6>customer's group: <span>platinum member</span></h6> 
                    <h6>receipt no: <span>d54567</span></h6> 

                    <table>
                        <thead>
                            <tr>
                                <th>services rendered</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ghana weaving and crochet</td>
                                <td>&#x20A6; 100</td>
                            </tr>
                            <tr>
                                <td>ponytail and gel</td>
                                <td>&#x20A6; 3400</td>
                            </tr>
                        </tbody>
                    </table>
                    <form action="">
                        <div className="bottom-sect">
                            <div className="wallet-sect">
                                <div className="inp-case">
                                    <input type="checkbox" name="" id=""/> 
                                    <h6>wallet balance</h6>
                                </div>
                                <span>&#x20A6; 0</span>  
                            </div>
                            <div className="amount-sect">
                                <h6>total price</h6>
                                <div className="amount-float">
                                    <input type="text" hidden name="amount" value={state}/>
                                    <span>&#x20A6;{state}</span>
                                </div>
                            </div>
                            <h6>looking good is good business</h6>
                        </div>
                        <Button 
                            type="submit" 
                            style={{width: "100%", fontSize: "12px", height: '30px'}}
                        >
                            complete payment & print receipt
                        </Button>
                        
                    </form>
                    
                </div>
            </div>
        </PaymntSlipWrap>
    )
}

export default PaymntSlip
