import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FromSVG1 from '../../assets/svg/FormSVG1';
import FormInput from '../FormInput';
import Button from '../Button';
import FormSVG from '../../assets/svg/FormSVG2';
import { PostAPI } from '../../components/PostAPI'
import ErrorField from '../ErrorField';
import Loader from '../Loader';
import MessageField from '../MessageField';


const CreateServiceFormWrap = styled.section `
    width: 380px;
    min-height: 550px;
    background: #FFFFFF;
    box-shadow: 0px 12px 20px rgba(43, 86, 128, 0.25);
    margin: auto;

    h1 {
        font-weight: 300;
        text-transform: capitalize;
        text-align: center;
        margin-top: 100px;
    }

    form {
        padding: 10px;

        .inpt-wrap {
            margin-bottom: 15px;

            label {
                text-transform: capitalize;
                color: rgba(0, 0, 0, 0.7);
                font-size: 13px;
                margin-bottom: 8px;
                font-weight: 600;
                display: block
            }

            .radio-wrp {
                display: flex;
                justify-content: space-between;

                span {
                    span {
                        margin-left: 10px;
                        text-transform: capitalize;
                    }
                }
            }
            
        }
        .btn-wrapper {
            display: flex;
            margin: 20px 0;

            a {
                text-transform: capitalize;
                text-decoration: none;
                padding: 8px 30px;
                border: 2px solid #3B5998;
                border-radius: 5px;
                color: #3B5998;
                font-weight: bold;
                font-size: 14px;
                margin-left: 20px;

                :hover {
                    transform: scale(1.01)
                }
            }
        }
    }

    .svg-wrp {
        width: 100%;

        svg {
            width: 100%;
            transform: translateY(98.5px)
        }
    }
`;

const CreateServiceForm = () => {
    const [data, setData] = useState({
        service: '',
        price: '',
        isLoading: false,
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
        setData({...data, isLoading: true});
        let datas = {
            name: data.service,
            price: data.price,
        };
        PostAPI('addService', datas, 'POST')
            .then(response => {
                if (response) {
                    setData({
                        ...data,
                        isLoading: false,
                        error: false,
                        success: true,
                        service: '',
                        price: ''
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

    return (
        <CreateServiceFormWrap>
            {data.isLoading && <Loader />}
            <FromSVG1 />
            <h1>new service</h1>
            {data.error && <ErrorField error={"Opps!!! something went wrong. Please contact your administrator"}/>}
            {data.success && <MessageField msg={"Service created successfully!!!!"}/>}
            <form action="" onSubmit={handleSubmit}>
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
                        type="text"
                        name='price'
                        required
                        value={data.price}
                        handleChange={handleChange}
                        style={{borderColor: '#C4C4C4'}}
                    />
                </div>
                <div className="btn-wrapper">
                    <Button type="submit" style={{background: '#3B5998'}}>create</Button>
                    <Link to='/accountant'>cancel</Link>
                </div>
            </form>
            <div className="svg-wrp">
                <FormSVG />
            </div>
        </CreateServiceFormWrap>
    )
}

export default CreateServiceForm
