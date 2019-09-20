import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import pic1 from '../assets/img/pic1.jpg';
import FormInput from './FormInput';
import Button from './Button';

const FormWrapper = styled.form `
    background: #ffffff;
    width: 100%;
    height: auto;
    padding: 50px;
    box-shadow: 0 12px 20px rgba(85, 172, 238, 0.25);

    section {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 130px;
            height: 130px;
            border-radius: 50%;
            margin-bottom: 20px
        }

        .upload {
            margin-bottom: 20px;

            label {
                display: flex;
                border: 1px solid #C4C4C4;
                padding: 5px 22px 5px 22px;
                opacity: 0.7;
                font-weight: bold;
                border-radius: 5px;
                cursor: pointer;

                i {
                    display: block;
                    margin-right: 10px;
                }

                input[type='file'] {
                    color: transparent;
                    display: none;
                }
            }
        }
    }

    .edit-form-cont {
        margin-bottom: 20px;

        label {
            display: block;
            font-weight: bold;
            font-size: 12px;
            margin-bottom: 10px;
            text-transform: capitalize;
            opacity: 0.7;
        }
    }

    .form-btn-sect {
        display: flex;

        .cancel-btn-home {
            text-decoration: none;
            font-weight: bolder;
            margin-left: 30px;
            width: 120px;
            height: 38px;
            font-size: 14px;
            text-transform: capitalize;
            border-radius: 7px;
            font-weight: bold;
            text-align: center;
            padding-top: 10px;
            display: block;

            :hover {
                transform: scale(1.08)
            }
        }
    }
    
`;

const FormUpload = ({path, color}) => {
    const [data, setData] = useState({
        firstname: '',
        surname: '',
        phonenumber: '',
        file: 'https://via.placeholder.com/150'
    })

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    //display uploaded image
    const handleImageChange = e => {
        const {file} = data
        setData({file: URL.createObjectURL(e.target.files[0])})
    }

    return (
        <FormWrapper>
            <section>
                <img src={data.file} alt="Profile Upload"/>
                <div className="upload">
                    <label htmlFor="imageUpload">
                        <i className="material-icons">cloud_upload</i>
                        change profile picture
                        <input type="file" id="imageUpload" accept="image/*" onChange={handleImageChange}/>
                    </label>
                </div>
            </section>
            <div className="edit-form-cont">
                <label htmlFor="firstname">firstname</label>
                <FormInput
                    type="text"
                    name="firstname"
                    style={{borderColor: '#3B5998'}}
                    required
                    value={data.firstname}
                    handleChange={handleChange}
                />
            </div>
            <div className="edit-form-cont">
                <label htmlFor="lastname">lastname</label>
                <FormInput
                    type="text"
                    name="lastname"
                    style={{borderColor: '#3B5998'}}
                    required
                    value={data.lastname}
                    handleChange={handleChange}
                />
            </div>
            <div className="edit-form-cont">
                <label htmlFor="phonenumber">phonenumber</label>
                <FormInput
                    type="tel"
                    name="phonenumber"
                    style={{borderColor: '#3B5998'}}
                    required
                    value={data.phonenumber}
                    handleChange={handleChange}
                />
            </div>
            <div className="form-btn-sect">
                <Button style={{backgroundColor: color}}>save</Button>
                <Link 
                    to={path} 
                    className="cancel-btn-home" 
                    style={{border: `2px solid ${color}`, color: color}}
                >cancel</Link>
            </div>
        </FormWrapper>
    )
}

export default FormUpload
