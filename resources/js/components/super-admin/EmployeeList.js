import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput';

const EmployeeListWrap = styled.section `
    width: 100%;
    padding: 60px 10px;
    background: rgba(166, 206, 227, 0.2);
    min-height: 500px;

    .header-sect {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;

        h1 {
            font-weight: 300;
            text-transform: capitalize;
        }

        .header-right {

            a {
                text-decoration: none;
                padding: 10px 20px;
                background: #3B5998;
                border-radius: 5px;
                color: #ffffff;
                font-size: 12px;
                font-weight: bold;
                text-transform: capitalize;
                margin-left: 30px;

                :hover {
                    background: #0A142B;
                }
            }
        }
    }

    table {
        width: 100%;
        height: auto;
        margin: 0;
        border-collapse:separate; 
        border-spacing: 0 7px;
        font-size: 14px;
        
        thead {
            
            th {
                text-align: left;
                padding-left: 10px;
                height: 25px;
                opacity: 0.6;
                text-transform: uppercase;
                font-weight: bold;
                font-size: 12px;
            }
        }

        tbody {
            tr {
                height: 35px;
                text-transform: capitalize;
                border-radius: 10px;
                background: #ffffff;
            }

        }

        td {
            padding-left: 10px;

            :first-child {
                border-radius: 5px 0 0 5px;
            }

            :last-child {
                border-radius: 0 5px 5px 0;
            }

            a {
                text-decoration: none;
                font-weight: bold;
                color: #3B5998;

                :hover {
                    border-bottom: 1px solid #3B5998
                }
            }
        }
    }

    @media (max-width: 700px) {
        padding-top: 30px;

        .header-sect {
            margin-bottom: 15px;
            flex-direction: column;

            h1 {
                font-size: 18px;
                margin-bottom: 15px;
            }
            .header-right {
                    input {
                        height: 25px !important;
                    }

                a {
                    padding: 8px 15px;
                    font-size: 10px
                }
            }
        }

        table {

            th {
                font-size: 8px !important;
            }
            font-size: 10px;
        }
    }
`;

const EmployeeList = ({handleChange}) => {
    return (
        <EmployeeListWrap>
            <div className="header-sect">
                <h1>employees list</h1>
                <div className="header-right">
                    <FormInput 
                        type="search"
                        style={{borderColor: '#C4C4C4', borderRadius: '5px', width: '200px', height: '35px'}}
                        value=""
                        placeholder="search for an employee"
                        handleChange={handleChange}
                    />
                    <Link to='/superadmin/employees/create'>create new employee</Link>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>title</th>
                        <th>created on</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>oluwakemi</td>
                        <td>adedunmola</td>
                        <td>nail technician</td>
                        <td>25-sep-2019</td>
                        <td><Link>manage</Link></td>
                    </tr>
                </tbody>
            </table>
        </EmployeeListWrap>
    )
}

export default EmployeeList
