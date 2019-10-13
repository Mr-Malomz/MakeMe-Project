import React from 'react';
import styled from 'styled-components';

const Error = styled.small`
    color: red;
    text-align: center;
    display: block;
`

const ErrorField = ({error}) => {
    return (
        <Error>{error}</Error>
    )
};

export default ErrorField;
