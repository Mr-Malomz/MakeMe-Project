import React, {useState} from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput';


const CardWrapper = styled.div `
    .jobTableContent{
       margin: 60px 10px 0 10px;
       width: 100%;

        .header-title{
            font-style: normal;
            font-weight: 300;
            font-size: 26px;
            width: 200px;
            color: #000000;
            margin: 0 18rem 0 0;
        }
        button{
            width: 200px;
            height: 35px;
            top: 160px;
            background: #3B5998;
            color: #FFFFFF;
            border-radius: 7px;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
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
                    <span className="header-title">Created Job Cards</span>
                    <FormInput 
                        type="search"
                        value={search}
                        name="searchJob"
                        placeholder="Search for a job card"
                        required
                        style={{
                            border: '1px solid #C4C4C4', 
                            borderRadius: '7px', 
                            width: '200px', 
                            boxSizing: 'border-box',
                            height: '35px',
                            margin: '0 3rem 0 0',
                        }}
                        handleChange={handleChange}
                    />
                    <button type="submit">Create a Job Card</button>

                </div>

        </CardWrapper>
    )
}

export default JobTableTitleSV;
