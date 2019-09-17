import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.input `
    width: 100%;
    height: 30px;
    border-width: 0.5px;
    padding-left: 10px;
`

const FormInput = ({handleChange, ...otherProps}) => {
    return (
        <InputWrapper onChange={handleChange} {...otherProps}/>
    )
}

export default FormInput
