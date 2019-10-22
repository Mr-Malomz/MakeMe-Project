import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput';
import Button from '../Button';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PostAPI } from '../../components/PostAPI';
import Loader from '../../components/Loader';
import ErrorField from '../../components/ErrorField';
import swal from 'sweetalert';

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

const EditEmpForm = (props) => {
    const [data, setData] = useState({
        firstname: '',
        surname: '',
        email: '',
        value: '',
        salary: '',
        jobTitle: '',
        showVal: false,
        selectedInput: 'none',
        role: '',
        isLoading: false,
        error: false,
        success: false,
        delError: false,
        delSuccess: false
    })

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
        console.log(123)
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

    const handleDelete = e => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this employee?",
            icon: "warning",
            // dangerMode: true,
            buttons: true,
            dangerMode: true,
        })
        .then(deleteEmployee => {
            if(deleteEmployee) {
                setData({
                    ...data,
                    isLoading: true
                });
                let datas = {
                    'id': props.props.match.params.Emp_Id
                };
                PostAPI('employeeDELETE', datas, 'DELETE')
                    .then(response => {
                        if (response) {
                            setData({
                                ...data,
                                isLoading: false,
                                delError: false,
                                delSuccess: true,
                            })
                        } else {
                            setData({
                                ...data,
                                isLoading: false,
                                delError: true,
                                delSuccess: false
                            })
                        }
                    })
            }
        });
        
    }
    const handleClickDelete = e => {

    }

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
        setData({
            ...data,
            isLoading: true
        });
        PostAPI('updateEmp', datas, 'POST')
            .then(response => {
                if (response) {
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

    useEffect(() => {
        let id = props.props.match.params.Emp_Id;
        setData({
            ...data,
            firstname: props.employee[0].Firstname,
            surname: props.employee[0].Surname,
            role: props.employee[0].Job_Role,
            jobTitle: props.employee[0].Title,
            salary: props.employee[0].Salary,
            email: props.employee[0].Email,
        })
        return () => {
           
        };
    }, []);

    
    const {employee} = props;

    if (data.success) {
        return <Redirect to={{
            pathname: '/superadmin/employees',
            state: { message: 'Employee successfully updated' }
        }}/>
    } else if (data.delSuccess) {
        return <Redirect to={{
            pathname: '/superadmin/employees',
            state: { delMessage: 'Employee deleted successfully' }
        }}/>
    }

    return (
        <EditEmpFormWrap>
            {data.isLoading && <Loader />}
            <h1>Manage selected employee</h1>
            {data.error && <ErrorField error={"Opps!!! something went wrong. Please contact your administrator"}/>}
            {data.delError && <ErrorField error={"Opps!!! something went wrong. Please contact your administrator"}/>}
            <form action="" onSubmit={handleSubmit}>
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
                        <label htmlFor="surname">surname</label>
                        <FormInput
                            type="text"
                            name='surname'
                            required
                            value={data.surname}
                            handleChange={handleChange}
                            style={{borderColor: '#C4C4C4', marginLeft: '6px'}}
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
                            value={employee[0].Commission}
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
                            disabled
                            value={data.email}
                            handleChange={handleChange}
                            style={{borderColor: '#C4C4C4', marginLeft: '25px'}}
                        />
                    </div>
                </div>    
                <div className="btn-wrapper">
                    <Button type="submit" style={{background: '#3B5998'}}>save</Button>
                    <Link to='/superadmin/employees'>cancel</Link>
                    <Button type="button" onClick={handleDelete} style={{background: '#EA5E5E'}}>delete user</Button>
                </div>
            </form>
        </EditEmpFormWrap>
    )
};

const MapStateToProps = (state, props) => {
    let id = props.props.match.params.Emp_Id;
    return {
        employee: state.employees.employees.filter(employee => employee.Emp_Id == id )
    }
}

export default connect(MapStateToProps)(EditEmpForm);
