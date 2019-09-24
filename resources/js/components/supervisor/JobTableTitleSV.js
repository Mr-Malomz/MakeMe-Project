import React, {useState} from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput';
import {Link} from 'react-router-dom';


const CardWrapper = styled.section `
    width: 100%;

    .jobTableContent{
        width: 100%;
        display: flex;
        margin: 0 auto;

        .header-title{
            margin: auto;
            font-style: normal;
            font-weight: 300;
            font-size: 26px;
            width: 100%;
            color: #000000;
            opacity: 0.7;
        }
        .link-style{
            width: 70%;
            height: 35px;
            padding: 10.5px 0 10.5px 0;
            background: #3B5998;
            text-decoration: none;
            color: #FFFFFF;
            border-radius: 7px;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            text-align: center;
        }
        .searchLink{
            display: flex;
            float: right;
            width: 100%;
        }
    }
`

const JobTableTitleSV = () => {
    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.target.value)
    };

    return (
        <CardWrapper>
         
                <div className="jobTableContent">
                    <h3 className="header-title">Created Job Cards</h3>
                    <div className="searchLink">
                        <FormInput 
                            type="search"
                            value={search}
                            name="searchJob"
                            placeholder="Search for a job card"
                            required
                            style={{
                                border: '1px solid #C4C4C4', 
                                borderRadius: '7px', 
                                width: '100%', 
                                boxSizing: 'border-box',
                                height: '35px',
                                margin: '0 2rem 0 0',
                               // paddingRight: '30px',
                            }}
                            handleChange={handleChange}
                        />
                        <Link to="/supervisor/createjob/" className="link-style" type="submit">Create a Job Card</Link>
                    </div>
                </div>

        </CardWrapper>
    )
}

export default JobTableTitleSV;
