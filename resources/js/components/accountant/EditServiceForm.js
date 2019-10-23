import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput';
import Button from '../Button';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { PostAPI } from '../../components/PostAPI';
import Loader from '../Loader';
import ErrorField from '../ErrorField';

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

const EditServiceForm = (props) => {
    const [data, setData] = useState({
        service: '',
        price: '',
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
        })
    };

    useEffect(() => {
        setData({
            ...data,
            service: props.service[0].Service_Name,
            price: props.service[0].Price
        })
        return () => {
            
        };
    }, [])

    const handleDelete = e => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this service?",
            icon: "warning",
            // dangerMode: true,
            buttons: true,
            dangerMode: true,
        }) 
            .then(deleteService => {
                if (deleteService) {
                    setData({
                        ...data,
                        isLoading: true
                    });
                    let datas = {
                        'id': props.props.match.params.ID
                    };
                    PostAPI('deleteService', datas, 'DELETE')
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
            })
        
    };

    const handleSubmit = e => {
        e.preventDefault();
        const datas = {
            id: props.props.match.params.ID,
            name: data.service,
            price: data.price
        }
        setData({
            ...data,
            isLoading: true
        });
        PostAPI('editService', datas, 'POST')
            .then(response => {
                if (response) {
                    setData({
                        ...data,
                        isLoading: false,
                        error: false,
                        success: true,
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

    if (data.success) {
        return <Redirect to={{
            pathname: '/accountant',
            state: { message: 'Service successfully updated' }
        }}/>
    } else if (data.delSuccess) {
        return <Redirect to={{
            pathname: '/accountant',
            state: { delMessage: 'Service deleted successfully' }
        }}/>
    }
    

    return (
        <EditServiceFormWrap>
            {data.isLoading && <Loader />} 
            <h1>Manage selected service</h1>
            {data.error && <ErrorField error={"Opps!!! something went wrong. Please contact your administrator"}/>}
            {data.delError && <ErrorField error={"Opps!!! something went wrong. Please contact your administrator"}/>}
            <form action="" onSubmit={handleSubmit}>
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
                            type="number"
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
                    <Button type="button" onClick={handleDelete} style={{background: '#EA5E5E'}}>delete service</Button>
                </div>
            </form>
        </EditServiceFormWrap>
    )
}

const MapStateToProps = (state, ownProps) => {
    let id = ownProps.props.match.params.ID;
    return {
        service: state.services.services.filter(service => service.Serv_ID == id)
    }
}

export default connect(MapStateToProps)(EditServiceForm);
