import React, {useState} from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput';

const CardWrapper = styled.form `
    .jobTableContent{
        margin: 60px 10px 60px 10px;

        .header-title{
            font-style: normal;
            font-weight: 300;
            font-size: 26px;
            color: #000000;
            margin: 0 16rem 0 0;
        }
        .buttonStyle{
            width: 157px;
            height: 35px;
            top: 60px;
            background: #3B5998;
            color: #FFFFFF;
            border-radius: 7px;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
        }
    }
`

const JobTableSV = () => {
    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.target.value)
    };

    return (
        <CardWrapper>
         
                <div className="jobTableContent">
                    <div></div>                    
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
                                width: '232px', 
                                boxSizing: 'border-box',
                                height: '35px',
                                margin: '0 4rem 0 0',
                            }}
                            handleChange={handleChange}
                        />
                        <button className="buttonStyle" type="submit">Create a Job Card</button>
                    </div>

        </CardWrapper>
    )
}

export default JobTableSV;
