import React, {useState} from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput';

const FormWrapper = styled.form `
    display: flex;

        button {
            position: relative;
            background: #3B5998;
            height: 30px;
            color: #ffffff;
            border-radius: 0 3px 3px 0;
            z-index: 0;
        }
`;

const FormSearch = () => {
    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.target.value)
    };

    return (
        <FormWrapper>
            <FormInput 
                type="search"
                value={search}
                name="searchInput"
                placeholder="Search for Customer"
                required
                style={{borderColor: '#3B5998', borderRadius: '3px 0 0 3px'}}
                handleChange={handleChange}
            />
            <button type="submit"><i className="fas fa-sm fa-search"></i></button>
        </FormWrapper>
    )
}

export default FormSearch
