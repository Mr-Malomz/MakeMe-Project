import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CustTableWrapper = styled.section `
    width: 45%;
    
    h5 {
        text-transform: capitalize;
    }
    .table-wrapper {
        background: #ffffff;
        min-height: 380px;
        height: auto;
        box-shadow: 0 8px 10px rgba(0, 0, 0, 0.25);
        padding: 10px;
        border-radius: 5px;

            table {
                width: 100%;
                border-collapse: collapse;
                font-size: 14px;
                text-transform: capitalize;

                thead {

                    th {
                        text-align: left;
                        height: 35px;
                        opacity: 0.7;
                        font-weight: bold;
                        /* padding-right: 40px; */
                        /* padding-left: 10px; */

                        &:first-child() {
                            width: 20px
                        }
                    }
                    
                }

                tbody {
                     tr:nth-of-type(odd){
                            background: #F5F5F5
                        }

                        td {
                            padding-left: 10px;

                            a {
                                text-decoration: none;
                                color: #000000;
                                font-weight: bold;

                                &:hover {
                                    color: #3B5998;     
                                }
                            }
                        }
                }

                tr {
                    height: 35px;
                }
            }
        
    }

    @media (max-width: 1000px) {
        width: 95%;
    }

    @media (max-width: 700px) {
        width: 95%;
    
    }
`;

const CustTable = () => {
    return (
        <CustTableWrapper>
            <h5>completed job card</h5>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>customer's name</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>nnamdi nwankwo</td>
                            <td><Link>view</Link></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>nnamdi nwankwo</td>
                            <td><Link>view</Link></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>nnamdi nwankwo</td>
                            <td><Link>view</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </CustTableWrapper>
    )
}

export default CustTable
