import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput';
import { connect } from 'react-redux';
import { fetchSalary  } from '../../redux/actions/salaryAction'
import ErrorField from '../ErrorField';
import Loader from '../Loader';

const PaymentListWrap = styled.section `
    width: 100%;
    padding: 60px 10px;
    background: rgba(166, 206, 227, 0.2);
    min-height: 500px;
    margin-left: 40px;

    .header-sect {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;

        h1 {
            font-weight: 300;
            text-transform: capitalize;
        }

        .header-right {
            display: flex;

            .sal-total {
                margin-left: 95px;
                text-align: center;

                h6 {
                    text-transform: capitalize;
                    opacity: 0.7;
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

            
        }
    }

    @media (max-width: 700px) {
        padding-top: 30px;
        margin-left: 0px;

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

                .sal-total {
                    margin-left: 70px;
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

const PaymentList = ({isLoading, salError, salary, fetchSalary}) => {
    const [data, setData] = useState({
        search: '',
        price: '',
        isChecked: false
    })

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const handleCheck = (e) => {
        setData({
            ...data,
            isChecked: !data.isChecked
        })
    };

    useEffect(() => {
        fetchSalary()
        return () => {
            
        };
    }, [])
    
    return (
        <PaymentListWrap>
            {salError && <ErrorField error={"Opps!!! something went wrong. Please contact your administrator"}/>}
            <div className="header-sect">
                <h1>january salary breakdown</h1>
                <div className="header-right">
                    <FormInput 
                        type="search"
                        style={{borderColor: '#C4C4C4', borderRadius: '5px', width: '200px', height: '35px'}}
                        value={data.search}
                        name="search"
                        placeholder="search for an employee"
                        handleChange={handleChange}
                    />
                    <div className="sal-total">
                        <h6>paid total</h6>
                        <h1>&#x20A6; 10023008</h1>
                    </div>
                </div>
            </div>
            {isLoading ? <Loader /> : (
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>title</th>
                            <th>percentage</th>
                            <th>amount</th>
                            <th>status</th>
                            <th>paid</th>
                        </tr>
                    </thead>
                    <tbody>
                    {salary.map((salary, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{`${salary.Firstname}  ${salary.Surname}`}</td>
                            <td>{salary.Title}</td>
                            <td>{salary.Commission}</td>
                            <td>&#x20A6; {salary.Salary}</td>
                            <td>{data.isChecked ? 'paid' : 'unpaid'}</td>
                            <td>
                                <input type="checkbox" name="paid"  checked={data.isChecked} onChange={() => handleCheck(i)}/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
            
        </PaymentListWrap>
    )
};

const MapStateToProps = state => {
    return{
        isLoading: state.salary.isLoading,
        salError: state.salary.salError,
        salary: state.salary.salary
    }
};

const MapDispatchToProps = dispatch => {
    return {
        fetchSalary: () => dispatch(fetchSalary())
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(PaymentList);
