import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput';
import { connect } from 'react-redux';
import { fetchServices } from '../../redux/actions/servicesAction'
import Loader from '../Loader';
import ErrorField from '../ErrorField';

const ServiceListWrap = styled.section `
    width: 100%;
    padding: 60px 10px;
    background: rgba(166, 206, 227, 0.2);
    min-height: 500px;
    margin-left: 45px;

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

const ServiceList = ({isLoading, servError, fetchServices, services}) => {

    const [data, setData] = useState({
        search: '',
    });

    const handleChange = e => {
        setData({
            ...data,
            search: e.target.value
        })
    };

    useEffect(() => {
        fetchServices()
        return () => {
            
        };
    }, []);

    //implement search property based on services
    const filteredServices = services.filter(service =>
        service.Service_Name.toLowerCase().includes(data.search.toLowerCase()));

    return (
        <ServiceListWrap>
            {servError && <ErrorField error={"Opps!!! something went wrong. Please contact your administrator"}/>}
            <div className="header-sect">
                <h1>service list</h1>
                <div className="header-right">
                    <FormInput 
                        type="search"
                        style={{borderColor: '#C4C4C4', borderRadius: '5px', width: '200px', height: '35px'}}
                        value={data.search}
                        placeholder="search for a service"
                        onChange={handleChange}
                    />
                    <Link to='/accountant/service/create'>create new service</Link>
                </div>
            </div>
            {isLoading ? <Loader /> : (
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>description</th>
                            <th>price</th>
                            <th>created on</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {filteredServices.map(service => (
                        <tr key={service.ID}>
                            <td>{service.ID}</td>
                            <td>{service.Service_Name}</td>
                            <td>&#x20A6; {service.Price}</td>
                            <td>{service.Date_Created.replace(/ .*/,'')}</td>
                            <td><Link to={`/accountant/service/edit/${service.ID}`}>manage</Link></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </ServiceListWrap>
    )
}

const MapStateToProps = state => {
    return {
        isLoading: state.services.isLoading,
        servError: state.services.servError,
        services: state.services.services
    }
};

const MapDispatchToProps = dispatch => {
    return {
        fetchServices: () => dispatch(fetchServices())
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(ServiceList);
