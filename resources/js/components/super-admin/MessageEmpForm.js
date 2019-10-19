import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotifications } from '../../redux/actions/notificationsAction'
import Loader from '../Loader';
import { PostAPI } from '../../components/PostAPI'
import ErrorField from '../ErrorField';
import MessageField from '../MessageField';

const MessageEmpFormWrap = styled.section `
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

    small {
        margin-top: 10px;
    }

    form {
        width: 100%;

        .form-cont {
            width: 65%;
            margin: 30px auto;

            .inpt-wrap {
                margin-bottom: 30px;
                display: flex;

                textarea {
                    width: 100%;
                    height: 180px;
                }

                label {
                    text-transform: capitalize;
                    color: rgba(0, 0, 0, 0.7);
                    font-size: 13px;
                    margin-right: 40px;
                    font-weight: 600;
                    display: block;
                    transform: translateY(5px)
                }
                
            }

            .sub-btn {
                display: flex;
                margin-left: auto;
                justify-content: flex-end;
            }
        }

        .btn-wrapper {
            margin: 60px auto;
            border-top: 1px solid #C4C4C4;
            width: 100%;
            padding: 10px 30px 30px 30px;

            h3 {
                text-transform: capitalize;
                color: rgba(0, 0, 0, 0.8);
                font-weight: 600;
                text-align: center;
            }

             table {
                width: 100%;
                height: auto;
                margin: 0;
                border-collapse: collapse;
                font-size: 14px;

                 thead {
                    background: #E9EEF8;
                    
                    th {
                        text-align: left;
                        padding-left: 10px;
                        height: 35px;
                        opacity: 0.6;
                        text-transform: capitalize;
                        font-weight: bold;
                    }
                }

                tbody {
                    tr {
                        height: 30px;
                        border: 2px solid #E9EEF8;
                    }
                }

                td {
                    padding-left: 10px;

                    a {
                        text-decoration: none;
                        text-transform: capitalize;
                        color: #A52525;
                        font-weight: bold;

                        :hover {
                            border-bottom: 1px solid #A52525;
                        }
                    }
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

            .btn-wrapper {
                font-size: 12px;
            }
        }
    }
`;

const MessageEmpForm = ({ fetchNotifications, notifications, notifError, isLoading }) => {
    const [data, setData] = useState({
        text: '',
        loading: false,
        error: false,
        success: false
    })

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        setData({...data, loading: true});
        let datas = {"messg": data.text};
        PostAPI('notif', datas, 'POST')
            .then(response => {
                if (response) {
                    setData({
                        ...data,
                        loading: false,
                        error: false,
                        success: true,
                        text: ''
                    })
                } else {
                    setData({
                        ...data,
                        loading: false,
                        error: true,
                        success: false
                    })
                }
            });
    };

    useEffect(() => {
        fetchNotifications()
        return () => {
            
        };
    }, []);

    return (
        <MessageEmpFormWrap>
            <h1>Notification System</h1>
            {data.loading && <Loader />}
            {data.error && <ErrorField error={'Opps!!! Something went wrong. Please contact your administrator'}/>}
            {data.success && <MessageField msg={'Notification sent!!!'} />}
            <form action="" onSubmit={handleSubmit}>
                <div className="form-cont">
                    <div className="inpt-wrap">
                        <label htmlFor="firstname">message</label>
                        <textarea 
                            name="text" 
                            value={data.text}
                            required
                            onChange={handleChange}
                        >
                        </textarea>
                    </div>
                    <div className="sub-btn">
                        <Button type="submit" style={{background: 'rgba(59, 89, 152, 0.79)'}}>send</Button>
                    </div>
                </div>    
                <div className="btn-wrapper">
                    <h3>notification history</h3>
                    {notifError && <ErrorField error={'Opps!!! Something went wrong. Please contact your administrator'}/>}

                    {isLoading ? <Loader /> : (
                        <table>
                            <thead>
                                <tr>
                                    <th>messages</th>
                                    {/* <th>action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                            {notifications.filter((notification, i) => (i < 5))
                                .map((notification, i) => (
                                <tr key={notification.Notf_Id}>
                                    <td>{notification.Message}</td>
                                    {/* <td><Link>delete</Link></td> */}
                                </tr>
                            ))
                            }
                            </tbody>
                        </table>
                    )} 
                    
                </div>
            </form>
        </MessageEmpFormWrap>
    )
};

const MapStateToProps = state => {
    return {
        isLoading: state.notifications.isLoading,
        notifError: state.notifications.fetchError,
        notifications: state.notifications.notifications
    }
};

const MapDispatchToProps = dispatch => {
    return {
        fetchNotifications: () => dispatch(fetchNotifications())
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(MessageEmpForm);
